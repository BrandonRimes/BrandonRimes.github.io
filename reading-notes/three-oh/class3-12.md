# Reading Assignment Twelve

## Reading from [moesiF](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/) and [WebDevSimplified @YouTube](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

- **In your own words, describe what each group of status code represents:**
  - 100’s = informational
  - 200’s = success
  - 300’s = redirect
  - 400’s = client error
  - 500’s = server error
- **What is a status code 202?**
  - Valid request processing asyncronously
- **What is a status code 308?**
  - Permanent redirect
- **What code would you use if an update didn’t return data to a client?**
  - 204 No Content
- **What code would you use if a resource used to exist but no longer does?**
  - 410 Gone
- **What is the ‘Forbidden’ status code?**
  - 403 The client has authorized or doesn’t need to authorize itself, but still has no permissions to access the resource.
- **Why do we need to pull our MongoDB database string out of our server and put it into our .env?**
  - So it isn't accessible on GitHub
- **What is middleware?**
  - Code which runs when server gets request before it's passed to routes.
- **What does app.use(express.json()) do?**
  - recognize the incoming Request Object as a JSON Object
- **What does the /:id mean in a route?**
  - Parameter
- **What is the difference beween PUT and PATCH?**
  - PUT updates all, PATCH updates only what is passed
- **How do you make a defalut value in a schema?**
  - "default:____"
- **What does a 500 error status code mean?**
  - Server error
- **What is the difference between a status 200 and a status 201?**
  - 200 - request received and understood. 201 - request successful and resource created.
  