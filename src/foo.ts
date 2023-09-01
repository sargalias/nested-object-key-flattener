const foo = () => {
  console.log('foo');
};

const add = (a: number, b: number): number => {
  return a + b;
};

export { foo as default, add };
