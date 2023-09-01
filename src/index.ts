import foo from './foo.js';

foo();
foo();

const bar = async () => {
  await Promise.resolve(1).then(() => {
    console.log('potato');
    throw new Error('foo');
  });
};

bar();
