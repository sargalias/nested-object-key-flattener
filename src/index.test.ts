import { describe, test, expect } from 'vitest';
import flattenObjectKeys from './index';

describe('flattenObjectKeyes', () => {
  test('should return empty array when called with empty object', () => {
    const object = {};
    const result = flattenObjectKeys(object);
    expect(result).toEqual([]);
  });

  test('should parse flat object with string values', () => {
    const object = {
      username: 'bob',
      password: 'password',
    };
    const result = flattenObjectKeys(object);
    expect(result).toEqual(['username', 'password']);
  });

  test('should not return the key when object has array with 0 elements', () => {
    const object = {
      hobbies: [],
    };
    const result = flattenObjectKeys(object);
    expect(result).toEqual([]);
  });

  test('should return keys like key[0] and key[1] when called with array value that has elements', () => {
    const object = {
      username: 'bob',
      password: 'password',
      hobbies: ['guitar', 'piano'],
    };
    const result = flattenObjectKeys(object);
    expect(result).toEqual([
      'username',
      'password',
      'hobbies[0]',
      'hobbies[1]',
    ]);
  });

  test('should parse object with one level of nesting and no array values', () => {
    const object = {
      name: 'bob',
      address: {
        street: '1 Foo Avenue',
      },
    };
    const result = flattenObjectKeys(object);
    expect(result).toEqual(['name', 'address.street']);
  });

  test('should parse object with two levels of nesting and no array values', () => {
    const object = {
      a: {
        b: {
          c: 'foo',
        },
      },
    };
    const result = flattenObjectKeys(object);
    expect(result).toEqual(['a.b.c']);
  });

  test('should parse object with two levels of nesting, including array values', () => {
    const object = {
      a: {
        b: ['baz', 'bazz'],
        c: {
          d: 'foo',
          e: ['foo', 'bar'],
        },
      },
    };
    const result = flattenObjectKeys(object);
    expect(result).toEqual([
      'a.b[0]',
      'a.b[1]',
      'a.c.d',
      'a.c.e[0]',
      'a.c.e[1]',
    ]);
  });

  test('should parse object with array with nested object', () => {
    const object = {
      a: [
        {
          b: 'foo',
          c: 'bar',
        },
        'baz',
      ],
    };
    const result = flattenObjectKeys(object);
    expect(result).toEqual(['a[0].b', 'a[0].c', 'a[1]']);
  });
});
