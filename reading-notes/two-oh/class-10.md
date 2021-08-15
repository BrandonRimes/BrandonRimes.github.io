# Reading Assignment 10 / July 23

- **Error Objects**
  - *SyntaxError* - Incorrect use of rules. Often simple typos.
  - *ReferenceError* - Variable undeclared or out of scope.
  - *EvalError* - Incorrect use of `eval()` function.
  - *URIError* - Un-escaped characters (/ ? & # : ;).
  - *TypeError* - Object or method does not exist.
  - *RangeError* - Using numbers outside of a functions range.
  - *Error* - Generic template for all error objects.
  - *NaN* - 'Not a Number' performing math with non-number values.

- **Dealing with errors**
  - Anticipate potential errors while coding, and write in ways of handling them.

    - ```javascript
      try {

      } catch(exception) {

      } finally {

      }
      ```

    - create your own errors: `throw new Error('message');`
  - Follow a methodical debugging workflow.
  - Utilize browser developer tools.
