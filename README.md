# web stuff

**element.util.js** utility to get elements by attribute name or attribute value
* usage
```javascript
<input id="textField1" type="text" value="value 1" customAttribute="custom value 1" /><br />
<input id="textField2" type="text" value="value 2" customAttribute="custom value 2" /><br />

var elementsByName = document.getElementsByAttributeName("customAttribute");
elementsByName.forEach((value, i) => {
   `document.write(value.getAttribute("id"));
   `document.write("<br />");
});
```

```javascript
<input id="textField1" type="text" value="value 1" customAttribute="custom value 1" /><br />
<input id="textField2" type="text" value="value 2" customAttribute="custom value 2" /><br />

var elementsByValue = document.getElementsByAttributeValue("custom value 2");
elementsByValue.forEach((value, i) => {
   document.write(value.getAttribute("id"));
   document.write("<br />");
});
```

\
**player.html** movie player with playlist

\
**scratchpad.html** to keep temporary notes
* right click on line numbers for context menu
  * `New File...` start new blank page
  * `Open File...` open text file
  * `Save As...` save text file
  * `Relative Line Number` uncheck for sequential line numbers
* drag file into textarea to open
* set default to sequential line numbers by changing checkbox checked value to true
```javascript
<input id="is-relative-number" type="checkbox" checked="true" />
```

\
**string.js** basic string utility
* usage
```javascript
String.trimStart(" sample ")
```
"sample "
```javascript
String.trimEnd(" sample ")
```
" sample"
```javascript
String.replace("ABC xyz", "ABC", "123")
```
"123 xyz"
```javascript
String.replaceIgnoreCase("ABC xyz", "aBc", "123")
```
"123 xyz"
```javascript
String.replaceAll("ABC xyz ABC", "ABC", "123")
```
"123 xyz 123"
```javascript
String.replaceAllIgnoreCase("ABC xyz ABC", "aBc", "123")
```
"123 xyz 123"
```javascript
String.hashCode("ABC xyz")
```
"489330501"
