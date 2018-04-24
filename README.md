# web stuff

**element.util.js** utility to get elements by attribute name or attribute value
* usage
```javascript
var byNameArray = document.getElementsByAttributeName("attributeName");
var byValueArray = document.getElementsByAttributeValue("attribute value");

document.getElementById("box").removeClass("css-class-to-remove");
document.getElementById("box").addClass("css-class-to-add");
```

\
**player.html** movie player with playlist

\
**scratchpad.html** to keep temporary notes
* right click on line numbers for context menu
  * `New File` open new blank page
  * `Open File...` open text file
  * `Save As...` save text file
  * `Relative Line Number` uncheck for sequential line numbers
  * `Wrap Text` check to wrap text (note: relative line numbers and current line indicator will be disabled)
* drag file into textarea to open
* set default to sequential line numbers by changing checkbox checked value to false
  * `<input id="is-relative-number" type="checkbox" checked="false" />`
* set default to wrap lines by changing checkbox checked value to true
  * `input id="is-wrap-text" type="checkbox" checked="true" />`

\
**string.js** basic string utility
* usage
  * `String.trimStart(" sample ")` = "sample "
  * `String.trimEnd(" sample ")` = " sample"
  * `String.replace("ABC xyz", "ABC", "123")` = "123 xyz"
  * `String.replaceIgnoreCase("ABC xyz", "aBc", "123")` = "123 xyz"
  * `String.replaceAll("ABC xyz ABC", "ABC", "123")` = "123 xyz 123"
  * `String.replaceAllIgnoreCase("ABC xyz ABC", "aBc", "123")` = "123 xyz 123"
  * `String.hashCode("ABC xyz")`  = "489330501"
