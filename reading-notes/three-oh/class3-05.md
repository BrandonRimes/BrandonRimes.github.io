# Reading Assignment Five

## Reading from [React Docs](https://reactjs.org/docs/thinking-in-react.html)

- **How would you break a mock into a component heirarchy?**
  - Box and label components and subcomponents.
- **What is the single responsibility principle and how does it apply to components?**
  - Ideally, a component should do one thing.
- **What does it mean to build a ‘static’ version of your application?**
  - Implement a version whcih renders the data model without interactivity.
- **Once you have a static application, what do you need to add?**
  - State.
- **What are the three questions you can ask to determine if something is state?**
  - Is it passed in from a parent via props? => not state.
  - Does it remain unchanged over time? => not state.
  - Can you compute it based on any other state or props in your component? => not state.
- **How can you identify where state needs to live?**
  - Identify every component that renders something based on that state.
  - Find a common owner component (a single component above all the components that need the state in the hierarchy).
  - Either the common owner or another component higher up in the hierarchy should own the state.
  - If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.
