# Nested object key flattener

This is a project with a small function implementation that takes a nested object and returns an array of the keys.


## Description

Input: The function takes a nested object with values that are valid in JSON. That includes things like strings, numbers, booleans, null, arrays and objects.

Output: An array which contains strings representing the keys and indices of the object, including nested ones. Keys and indices should be represented in dot notation for objects (e.g. `object.value`) and bracket notation for arrays (e.g. `array[0]`).

Example:

```typescript
const result = keysOf({
  name: 'Bob',
  age: 22,
  skills: ['JavaScript', 'React'],
  address: {
    city: 'London',
    postcode: 'AAAA AAA'
  }
});

console.log(result);
/*
Output:
[
  'name',
  'age',
  'skills[0]',
  'skills[1]',
  'address.city',
  'address.postcode'
]
*/
```


## Instructions on Running the Project

1. Make sure Node is installed. You can install it at [nodejs.org](https://nodejs.org/en/download).
2. Clone the repository and navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run test` to run the tests.

