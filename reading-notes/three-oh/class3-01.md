# Reading Assignment One

## Reading from [tutorialspoint](https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm) and [itnext](https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0#:~:text=%E2%80%9CProps%E2%80%9D%20is%20a%20special%20keyword,way%20from%20parent%20to%20child)

- **What is a component?**
  - A modular set of functionalities
- **What are the charactistics of a component?**
  - Reusable
  - Replaceable
  - Non Context Specific
  - Extensible
  - Encapsulated
  - Independent
- **What are the advantages of using component based architecture?**
  - Reduced development time and cost
  - Increased reliability
- **What is props short for?**
  - *Prop*erties
- **How are props used in React?**
  - Passing read-only data between components
  - Define an `attribute={"value"}`
  - Pass it to the child component(s) `const childComponent = (props) => {}`
  - Render props object with dot notation `{props.text}`
- **What is the flow of props?**
  - Uni-directional, parent to child
