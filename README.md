# web stuff

**player.html** movie player with playlist

\
**scratchpad.html** to keep temporary notes
* right click on line numbers for context menu
  * `New File...` start new blank page
  * `Open File...` open text file
  * `Save As...` save text file
  * `Relative Line Number` uncheck for sequential line numbers
    * set default to sequential line numbers by changing checkbox checked value to true
```javascript
<input id="is-relative-number" type="checkbox" checked="true" />
```
* drag file into textarea

\
**string.js** basic string utility
* usage
  * `String.trimStart(" sample ")` = "sample "
  * `String.trimEnd(" sample ")` = " sample"
  * `String.replace("ABC xyz", "ABC", "123")` = "123 xyz"
  * `String.replaceIgnoreCase("ABC xyz", "aBc", "123")` = "123 xyz"
  * `String.replaceAll("ABC xyz ABC", "ABC", "123")` = "123 xyz 123"
  * `String.replaceAllIgnoreCase("ABC xyz ABC", "aBc", "123")` = "123 xyz 123"
  * `String.hashCode("ABC xyz")` = "489330501"
