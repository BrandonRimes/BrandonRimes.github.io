# Reading Assignment Three

## Reading From [React Docs](https://reactjs.org/docs/lists-and-keys.html) and [Medium](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab)

- What does .map() return?
  - A new array of the same length as the original.
- If I want to loop through an array and display each value in JSX, how do I do that in React?
  - Loop the array with `map()`, return an element for each item with the item in curly braces. EX. `arr.map((item) => <div>{item}</div>)`
- Each list item needs a unique ____.
  - key
- What is the purpose of a key?
  - To help React identify which items have been added, removed, or changed.
- What is the spread operator?
  - An ellipsis of three dots (…) used to expand an iterable object into the list of arguments.
- List 4 things that the spread operator can do.
  - Use an array as arguments, adding state in React, combining objects, combining arrays.
- Give an example of using the spread operator to combine two arrays.

  - ```javascript
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const arr1and2 = [...arr1, ...arr2];
    console.log(arr1and2); // [1, 2, 3, 4, 5, 6]
    ```

- Give an example of using the spread operator to add a new item to an array.

  - ```javascript
    const arr1 = [1,2,3];
    const arr2 = [...arr1, 4, 5, 6];
    console.log(arr2); // [1, 2, 3, 4, 5, 6]
    ```

- Give an example of using the spread operator to combine two objects into one.

  - ```javascript
    const obj1 = {one: 1};
    const obj2 = {two: 2};
    const obj1and2 = {...obj1, ...obj2};
    console.log(obj1and2); // {one: 1, two: 2}
    ```

- In the video, what is the first step that the developer does to pass functions between components?
  - Create the function wherever the state to be changed exists.
- In your own words, what does the increment function do?
  - Recieve name from component, look for name in constructor, increment count of name.
- How can you pass a method from a parent component into a child component?
  - Through props.
- How does the child component invoke a method that was passed to it from a parent component?
  - Invoke the function in props.
