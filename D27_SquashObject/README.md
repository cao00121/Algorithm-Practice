# *Instruction & Requirements*
Implement a function that returns a new object after squashing the input object into a single level of depth where nested keys are "squashed" together with a period delimiter (`.`).

```javascript
const p0 = Promise.resolve(42);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

await promiseAny([p0, p1]); // 42
```

```javascript
const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
```
Any keys with null-ish values (`null` and `undefined`) are still included in the returned object.

```javascript
const object = {
  a: { b: null, c: undefined },
};
squashObject(object); // { 'a.b': null, 'a.c': undefined }
```

It should also work with properties that have arrays as the value:

```javascript
const object = { a: { b: [1, 2, 3], c: ['foo'] } };
squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }
```

Empty keys should be treated as if that "layer" doesn't exist.

```javascript
const object = {
  foo: {
    '': { '': 1, 1bar: 2 },
  },
};
squashObject(object); // { foo: 1, 'foo.bar': 2 }
```


# *My Problem-solving Ideas*

The main challenges of this problem lie in handling nested objects and empty keys. 

We need to recursively traverse the object, "flatten" the nested keys into a single-level structure, and be careful with empty keys to ensure that no values are lost. 

The solution approach is to use a recursive function to traverse the object. For each key-value pair, if the value is an object (not an array), the function is called recursively; 

if the value is an array, the function is called recursively for each element of the array; 

And if an empty key is encountered, it is handled according to the current context.

# *Better problem-solving ideas*

