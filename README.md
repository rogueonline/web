# web stuff

**clock.html** html5 svg clock
* hour = outer ring
* minute = middle ring
* second = inner ring
* time in the center defaults to 24 hour format
  * set default to 12 hour format\
change flag to false `let is24HourFormat = false`
  * disable time in center\
change flag to 0 `let showTime = 0`
* to resize change css width and height in `#clock-container`
  * `width: 300px`\
`height: 300px`
* to use rounded ends change roundEnd to `let roundEnd = true`\
![Clock Screenshot](screenshot/clock-screenshot-01.png?raw=true "SVG animated clock")

\
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

![Movie Player](screenshot/player-screenshot-01.png?raw=true "Add Movies")
![Movie Player](screenshot/player-screenshot-02.png?raw=true "Click to Play")

\
**scratchpad.html** to keep temporary notes
* right click on line numbers for context menu
  * `New File` open new blank page
  * `Open File...` open text file
  * `Save As...` save text file
  * `Relative Line Number` uncheck for sequential line numbers
  * `Wrap Text` check to wrap text (note: relative line numbers and current line indicator will be disabled)
![Scratchpad](screenshot/scratchpad-screenshot-01.png?raw=true "Right Click Menu")
* drag file into textarea to open
* <kbd>ctrl</kbd>+<kbd>Arrow Up</kbd> scroll up without moving cursor\
<kbd>ctrl</kbd>+<kbd>Arrow Down</kbd> scroll down without moving cursor
* set default to sequential line numbers by changing checkbox checked value to false
  * `<input id="is-relative-number" type="checkbox" checked="false" />`
![Scratchpad](screenshot/scratchpad-screenshot-02.png?raw=true "Relative Line Number")
* set default to wrap lines by changing checkbox checked value to true
  * `input id="is-wrap-text" type="checkbox" checked="true" />`
![Scratchpad](screenshot/scratchpad-screenshot-03.png?raw=true "Wrapped Text")

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
