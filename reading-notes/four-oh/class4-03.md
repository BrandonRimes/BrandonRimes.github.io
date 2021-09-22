# Reading Assignment Three

## Reading from [Baeldung](https://www.baeldung.com/java-primitives-vs-objects), [Java Docs](https://docs.oracle.com/javase/tutorial/essential/exceptions/index.html), and [Java Docs](https://docs.oracle.com/javase/tutorial/essential/io/scanning.html)

### Primitive Types and Their Wrapped Reference Type Counterparts

- Every primitive type corresponds to a reference type.
- Java performs a conversion between primitive and reference types if an actual type is different from the declared one.
  - The process of converting a primitive type to a reference one is called autoboxing, the opposite process is called unboxing.
- The decision what object is to be used is based on what application performance we try to achieve, how much available memory we have, the amount of available memory and what default values we should handle.
- primitive type variables have the following impact on the memory:
  - boolean – 1 bit
  - byte – 8 bits
  - short, char – 16 bits
  - int, float – 32 bits
  - long, double – 64 bits
- Primitive types live in the stack and hence are accessed fast.
- Reference types are objects, they live on the heap and are relatively slow to access.

### Exceptions

- An **exception** is an event, occuring during program execution, which disrupts the instruction flow.
- Code that might throw certain exceptions must be enclosed by either of the following:
  - A try statement that catches the exception. The try must provide a handler for the exception.
  - A method that specifies that it can throw the exception. The method must provide a throws clause that lists the exception.
- Kinds of exceptions:
  - **Checked** exceptions are subject to the Catch or Specify Requirement. All exceptions are checked exceptions, except for those indicated by Error, RuntimeException, and their subclasses.
  - **Errors** are not subject to the Catch or Specify Requirement. Errors are those exceptions indicated by Error and its subclasses.
  - **Runtime** exceptions are not subject to the Catch or Specify Requirement. Runtime exceptions are those indicated by RuntimeException and its subclasses.
- Exceptions provide the means to separate the details of what to do when something out of the ordinary happens from the main logic of a program.

### Scanning

- A Scanner breaks its input into tokens using a delimiter pattern, which by default matches whitespace. The resulting tokens may then be converted into values of different types using various methods.
