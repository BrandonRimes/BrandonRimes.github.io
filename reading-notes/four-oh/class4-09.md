# Reading Assignment Nine

Web Request-Response Cycle and Java

## Reading From

[Baeldung](https://www.baeldung.com/java-http-request)  
[DEV](https://dev.to/dangolant/things-i-brushed-up-on-this-week-the-http-request-lifecycle-)  

___

- `HttpUrlConnection` class allows for basic HTTP requests without the use of additional libraries.
- Creating a connection.
  - Create an HttpUrlConnection instance using the `openConnection()` method of the URL class.

  ```java
    URL url = new URL("http://example.com");
    HttpURLConnection con = (HttpURLConnection) url.openConnection();
  ```

  - Connect to a given URL by setting a requestMethod attribute.

  ```java
    con.setRequestMethod("GET");
  ```

  - To add parameters to a request, set the `doOutput` property to `true` and write a `String` of the form *param1 = value, m2 = value* to the `OutoutStream`.

  ```java
    Map<String, String> parameters = new HashMap<>();
    parameters.put("param1", "val");

    con.setDoOutput(true);
    DataOutputStream out = new DataOutputStream(con.getOutputStream());
    out.writeBytes(ParameterStringBuilder.getParamsString(parameters));
    out.flush();
    out.close();
  ```

  - `ParameterStringBuilder` is a written utility class with method `getParamsString()` that transforms a Map into a String of the required format.

  ```java
    public class ParameterStringBuilder {
      public static String getParamsString(Map<String, String> params) 
        throws UnsupportedEncodingException{
          StringBuilder result = new StringBuilder();

          for (Map.Entry<String, String> entry : params.entrySet()) {
            result.append(URLEncoder.encode(entry.getKey(), "UTF-8"));
            result.append("=");
            result.append(URLEncoder.encode(entry.getValue(), "UTF-8"));
            result.append("&");
          }

          String resultString = result.toString();
          return resultString.length() > 0
            ? resultString.substring(0, resultString.length() - 1)
            : resultString;
        }
    }
  ```

  - Add headers to a request  
  `con.setRequestProperty("Content-Type", "application/json");`
  - Read value of header from connection  
  `String contentType = con.getHeaderField("Content-Type");`
