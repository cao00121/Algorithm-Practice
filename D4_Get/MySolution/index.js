/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
     // Declared a variable(array) to store the pathParam. If it's a string, use the split() to turn the string into an array.
     const pathArray = Array.isArray(pathParam) ? pathParam : pathParam.split('.');

     // Declared a variable(object) to store the object parameter.
     let result = objectParam;
     // Use a for loop to retrieve every element in the pathArray array.
     for (let i = 0; i < pathArray.length; i++) {
          const key = pathArray[i];

          /** 
          * Check if the result is null or undefined. If so, return the defaultValue.
          * Use '== null' to check for both 'null' and 'undefined' in a concise way.
          * This is because 'null == undefined' is true, allowing us to handle both cases simultaneously.
          */ 
          if (result == null) {
               return defaultValue;
          }

          // Checks if the current key exists directly on the result object (not on its prototype chain).
          result = result.hasOwnProperty(key) ? result[key] : undefined;

          /**
          * If the current result is undefined, indicating the path does not exist, return the defaultValue immediately.
          * Use '=== undefined' to explicitly check for 'undefined' values.
          * This strict equality check ensures that we only return the defaultValue for truly undefined properties,
          * not for falsy values or for properties that are explicitly set to 'null'.
          */ 
          if (result === undefined) {
               return defaultValue;
          }
     }

     return result;
}
