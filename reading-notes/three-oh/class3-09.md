# Reading Assignment Nine

## Reading from [Medium](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa) and [The Net Ninja @YouTube](https://www.youtube.com/watch?v=xHLd36QoS4k)

- **What is functional programming?**
  - A paradigm which treats computation as the evaluation of mathematical functions, avoiding state-changes and mutable data.
- **What is a pure function and how do we know if something is a pure function?**
  - One which only knows what is passed to it, no external values. It returns the same result if given the same arguments (aka deterministic), and doesn't cause observable side effects.
- **What are the benefits of a pure function?**
  - Stablility, consistency, predictablity, easier to test.
- **What is immutability?**
  - Inability to change or be changed.
- **What is Referential transparency?**
  - A function consistently yielding the same result for same input. Pure functions + immutable data = referential transparency.

- **What is a module?**
  - Logical divisions of code functionality.
- **What does the word ‘require’ do?**
  - Refer the path to a module from global object.
- **How do we bring another module into the file the we are working in?**
  - Assign the module reference to a variable. The reference, `const variable = require('./module-name');`, will hold the value returned from what the module exports `module.exports = function/value`
- **What do we have to do to make a module available?**
  - State which part of the module is to be avaliable: `module.exports = _____`
