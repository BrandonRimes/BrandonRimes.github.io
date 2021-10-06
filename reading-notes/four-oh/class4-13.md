# Reading Assignment Thirteen

Related Resources and Integration Testing

## Reading From

[Baeldung](https://www.baeldung.com/spring-data-rest-relationships) Working with Relationships in Spring Data REST  
[Baeldung](https://www.baeldung.com/integration-testing-in-spring) Integration Testing in Spring  

___

### One-to-One Relationship

- Define two entity classes with `@OneToOne` annotation.
- Each association resource needs a different name.
- The association name defaults to the property name and can be customized using the rel attribute of @RestResource annotation.
- Create a repositoy interface for each entity by extending the CrudRepositoyr interface.
- Create an instance of each entity.
- After persisting both instances, establish the relationship using the PUT method.

### One-to-Many Relationship

- Defined by `@OneToMany` and `@ManyToOne` annotations.

### Many-to-Many Relationship

- Defined by `@ManyToMany` annotation.
