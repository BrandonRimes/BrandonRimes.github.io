# Reading Assignment Six

Inheritance and Interfaces

## Reading from

[Java Docs](https://docs.oracle.com/javase/tutorial/java/concepts/) OOP Concepts  
[Java Docs](https://docs.oracle.com/javase/tutorial/java/IandI/index.html) Interfaces and Inheritance  

___

## Interface

- "There are a number of situations in software engineering when it is important for disparate groups of programmers to agree to a "contract" that spells out how their software interacts. Each group should be able to write their code without any knowledge of how the other group's code is written. Generally speaking, interfaces are such contracts."
- A reference type similar to a class
- Can only contain constants, method signatures, default methods, static methods, and nested types.
- Method bodies exist only for default and static methods.
- Interfaces are not instantiated. They are implements by classes or extended by other interfaces.

## Inheritance

- **Subclass** (aka derived, extended, or child) - A class derived from another class.
- **Superclass** (aka base or parent) - The class from which the subclas is derived.
- Every class has only one direct superclass (single inheritance).
- Every class is implicitly a subclass of Object, in the absence of any other explicit superclass.
- `Object` itself has no superclass.
- A subclass inherits all the **members** (fields, methods, nested classes) from it's super.
- Constructors are not members, therefore not inherited, but can be invoked from the sub.
- If a subclass is in the same package as it's parent, it inherits package-prive members, else only public and protected members are inherited.
- Inherited members can be used as is, replaced, hidden, or supplemented...
  - If a field is declared with the same name as on in the super, the field from super will be hidden (not recommended).
  - A new instance method with the same signature as one in the super will override the super method.
  - A new static method with the same signature as one in the Super will hide the super method.
  - Private members are not inherited. If the super has inheritable methods for accessing private fields, these can be used by the sub.
  - Nested classes have access to private members of thier enclosing class.
