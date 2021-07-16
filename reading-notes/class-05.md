# Reading Assignment 5 / July 16

- CSS Attribute Selectors:
  - **Existence** - targets a specific attribute.
    - `div[id]` = all divs with an id
  - **Equality** - specific attribute with specific value.
    - `img[class="objects"]` = all images with class of 'object'
  - **Space** - value appears in a space-separated list of words.
    - `p[title~=" "]`
  - **Prefix** - value begins with specific string.
    - `h2[attr^"a"]` = all h2 elements with attribute value beginning with "d"
  - **Substring** - value contains specific substring.
    - `p[attr*"we"]` = all p tags with attribute value containing "we"
  - **Suffix** - value ends with specific string.
    - `section[attr$"x"]` = every section with attribute value ending with "x"

- `:first-letter` and `:first-line`
  - specify different values for the first letter or line of text inside the element.
  - `header h1:first-letter { font-size: 1.5em; }`

- `text-transform:` - self explanatory
  - `text-transform: uppercase;`
  - `text-transform: lowercase;`
  - `text-transform: capitalize;`
