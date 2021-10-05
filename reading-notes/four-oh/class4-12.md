# Reading Assignment Twelve

Spring RESTful Routing & Static Files

## Reading From

[Baeldung](https://www.baeldung.com/spring-requestmapping)  
[Spring](https://spring.io/guides/gs/accessing-data-jpa/)  
[Baeldung](https://www.baeldung.com/spring-data-repositories)  

___

### Spring Request Mapping

- The HTTP `method` parameter has no default. Maps to any HTTP request without specified value.  
`@RequestMapping(value = "/", method = GET)`
- `headers` attribute  
`@RequestMapping(value = "/", headers = "key=val", method = GET)`
- `accept` header

```java
  @RequestMapping(  
    value = "/ex/foos",  
    method = GET,  
    headers = "Accept=application/json"
  )
```

- `produces` and `consumes` serves this purpose.

```java
  @RequestMapping(
    value = "/ex/foos", 
    method = RequestMethod.GET, 
    produces = "application/json"
  )
```

### Path Variable

```java
  @PathVariable("id") long id) {
    return "Get a specific item with id=" + id;
  }
```

- Simplified if the name of the method parameter matches the that of the path variable exactly.

```java
  @PathVariable String id) {
    return "Get a specific item with id=" + id;
}
```

### Spring Data Repositories

Every repository in Spring Data extends the generic **Repository** interface. The JpaRepository contains the full API of CrudRepository and PagingAndSortingRepository.
