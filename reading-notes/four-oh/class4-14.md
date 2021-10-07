# Reading Assignment Fourteen

BCrypt

## Reading From

[auth0](https://auth0.com/blog/hashing-passwords-one-way-road-to-security/)  
[Daniel Boterhoven](https://danboterhoven.medium.com/why-you-should-use-bcrypt-to-hash-passwords-af330100b861)  
[Mindrot](https://www.mindrot.org/projects/jBCrypt/)  

___

### Hashing Passwords

*"Hashing is the foundation of secure password storage."*

- In cryptography, a hash function is a mathematical algorithm that maps data of any size to a bit string of a fixed size. The fixed-size string function output is known as the hash or the input digest.
  - It's easy and practical to compute the hash, but "difficult or impossible to re-generate the original input if only the hash value is known."
  - It's difficult to create an initial input that would match a specific desired output.
- In contrast to encryption, hashing is a one-way mechanism.
- Commonly used hashing algorithms include Message Digest (MDx) algorithms, such as MD5, and Secure Hash Algorithms (SHA), such as SHA-1 and the SHA-2 family that includes the widely used SHA-256 algorithm.
- Hash functions behave as one-way functions by using mathematical operations that are extremely difficult and cumbersome to revert such as the modulo operator.
- Must be pre-image resistant. A pre-image is a value that produces a specific hash when used as input.

### Using BCrypt To Hash Passwords

*Designed by Niels Provos and David Mazières in 1999.*

- Based on the Blowfish block cipher cryptomatic algorithm and takes the form of an adaptive hash function.
- Using a Key Factor, BCrypt is able to adjust the cost of hashing. With Key Factor changes, the hash output can be influenced. In this way, BCrypt remains extremely resistant to hacks, especially a type of password cracking called rainbow table.

### jBCrypt

- A Java implementation of OpenBSD's Blowfish password hashing code.
- To use the API:

  ```java
  // Hash a password for the first time
  String hashed = BCrypt.hashpw(password, BCrypt.gensalt());

  // gensalt's log_rounds parameter determines the complexity
  // the work factor is 2**log_rounds, and the default is 10
  String hashed = BCrypt.hashpw(password, BCrypt.gensalt(12));

  // Check that an unencrypted password matches one that has
  // previously been hashed
  if (BCrypt.checkpw(candidate, hashed))
    System.out.println("It matches");
  else
    System.out.println("It does not match");
  ```
