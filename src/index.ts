type Primitive = string | number | boolean | null;

type NestedObject = {
  [key: string]: NestedObject | Primitive | (Primitive | NestedObject)[];
};

const flattenObjectKeys = (o: NestedObject): string[] => {
  const result: string[] = [];

  Object.entries(o).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((value2, i) => {
        const parsedKey = `${key}[${i}]`;
        if (isObject(value2)) {
          const value2Result = flattenObjectKeys(value2);
          const prefix = `${parsedKey}.`;
          pushNestedResult(result, prefix, value2Result);
        } else {
          result.push(parsedKey);
        }
      });
    } else if (isObject(value)) {
      const nestedResult = flattenObjectKeys(value);
      const prefix = `${key}.`;
      pushNestedResult(result, prefix, nestedResult);
    } else {
      result.push(key);
    }
  });

  return result;
};

const pushNestedResult = (
  result: string[],
  prefix: string,
  nestedObjectFlattenedKeys: string[],
): void => {
  for (let i = 0; i < nestedObjectFlattenedKeys.length; i++) {
    const nestedObjectFlattenedKey = nestedObjectFlattenedKeys[i];
    const key = `${prefix}${nestedObjectFlattenedKey}`;
    result.push(key);
  }
};

const isObject = (x: any): x is NestedObject => {
  return typeof x === 'object' && x !== null;
};

// Simple version without arrays with objects as elements
// const flattenObjectKeys = (o: NestedObject): string[] => {
//   let result: string[] = [];

//   Object.entries(o).forEach(([key, value]) => {
//     if (Array.isArray(value)) {
//       const result2 = value.map((_, i) => `${key}[${i}]`);
//       result = result.concat(result2);
//     } else if (isObject(value)) {
//       const result2 = flattenObjectKeys(value);
//       const prefix = `${key}.`;
//       const result3 = result2.map((value) => `${prefix}${value}`);
//       result = result.concat(result3);
//     } else {
//       console.log(value);
//       result.push(key);
//     }
//   });
//   return result;
// };

// No arrays containing objects. Version where the function accepts a prefix
// const flattenObjectKeys = (o: NestedObject, keySoFar = ''): string[] => {
//   let result: string[] = [];

//   if (Array.isArray(o)) {
//     return o.map((_, i) => `${keySoFar}[${i}]`);
//   }

//   Object.entries(o).forEach(([key, value]) => {
//     const newKeySoFar = keySoFar ? `${keySoFar}.${key}` : key;
//     if (typeof value === 'object' && value !== null) {
//       const nestedResult = flattenObjectKeys(value, newKeySoFar);
//       result = result.concat(nestedResult);
//     } else {
//       result.push(newKeySoFar);
//     }
//   });
//   return result;
// };

// No arrays containing objects. Version where the function accepts a prefix. Version with tail call optimisation with continuous passing style.
// type ContinuationFunction = (key: string) => void;
// const flattenObjectKeys = (obj: any): string[] => {
//   const result: string[] = [];
//   _flattenObjectKeys(obj, '', (key) => result.push(key));
//   return result;
// };
// const _flattenObjectKeys = (
//   obj: any,
//   prefix: string = '',
//   continuation: ContinuationFunction = () => {},
// ) => {
//   Object.keys(obj).forEach((key) => {
//     const newKey = prefix ? `${prefix}.${key}` : key;
//     if (Array.isArray(obj[key])) {
//       obj[key].forEach((_: any, index: number) => {
//         continuation(`${newKey}[${index}]`);
//       });
//     } else if (typeof obj[key] === 'object' && obj[key] !== null) {
//       _flattenObjectKeys(obj[key], newKey, continuation);
//     } else {
//       continuation(newKey);
//     }
//   });
// };

export default flattenObjectKeys;
