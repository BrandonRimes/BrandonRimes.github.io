# Reading Assignment Ten

## Reading from [FreeCodeCamp](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/) and [CodeBurst](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)

- **What is a ‘call’?**
  - A function invocation.
- **How many ‘calls’ can happen at once?**
  - One single solitary call.
- **What does LIFO mean?**
  - Last In First Out (in reference to the stack)
  - Fun Fact! Magic The Gathering functions in the same way, with a LIFO stack called "The Stack"
- **Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.**

  - ```javascript
      function firstFunction(){
        throw new Error('Stack Trace Error');
      }

      function secondFunction(){
        firstFunction();
      }

      function thirdFunction(){
        secondFunction();
      }

      thirdFunction();
    ```

- **What causes a Stack Overflow?**
  - A function calling itself without an exit point (recursive).
- **What is a ‘refrence error’?**
  - The variable being referenced has not yet been declared.
- **What is a ‘syntax error’?**
  - Something cannot be parsed syntactically.
- **What is a ‘range error’?**
  - Trying to use an invalid length.
- **What is a ‘type error’?**
  - Type incompatible with property/method being applied.
- **What is a breakpoint?**
  - A line selected in the code to "break" (stop and evaluate) if that code was run.
- **What does the word ‘debugger’ do in your code?**
  - Creates a breakpoint in the code.
  