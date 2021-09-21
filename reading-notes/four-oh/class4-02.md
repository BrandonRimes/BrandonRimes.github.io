# Reading Assignment Two

## Reading from [Ensta](https://perso.ensta-paris.fr/~diam/java/online/notes-java/language/10basics/import.html) and [Baeldung](https://www.baeldung.com/java-loops)

- **Packages**:
  - A grouping of Java classes
  - Same name as folder containing .java files
  - Declared when defining java program
  - Imported from other libraries
  - Declaration must be first in java source file

- **Loops**:
  - For

    ```java
      for(initialization; Boolean-expression; step) // args optional
      {
        statement;
      }
      for(int i = 0; i < 3; i++)
      {
        System.out.println(i);
      }
      for(;;){} // infinite loop
    ```

  - While

    ```java
      while(Boolean-expression)
      {
        statement;
      }
      int i = 0;
      while(i<3)
      {
        System.out.println(i);
      }
    ```

  - Do-While

    ```java
      do
      {
        statement;
      } while(Boolean-expression);
      int i = 0;
      do
      {
        System.out.println(i);
      } while(i<3);
    ```
