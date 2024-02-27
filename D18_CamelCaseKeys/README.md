# *Instruction & Requirements*
Implement a function `camelCaseKeys`, that takes an object and returns a new object with all its keys converted to camel case.

Camel case is a format where words are separated with a single capitalized letter and the first letter of the word will be lower case. Some examples:


|   String   |   camelCase   |
|------------|---------------|
|**`foo`**   |      yes      |
|**`foobar`**|      yes      |
|**`Foo_Bar`**|      No      |
|**`foo_bar`**   |      No      |

For simplicity, we only need to consider the 4 string formats above, there will not be keys containing spaces, hyphens, or PascalCase.

**Example**
```javascript
camelCaseKeys({ foo_bar: true });
// { fooBar: true }

camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } });
// { fooBar: true, barBaz: { bazQux: '1' } }

camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]);
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]
```

# *My Problem-solving Ideas*



# *Better problem-solving ideas*

