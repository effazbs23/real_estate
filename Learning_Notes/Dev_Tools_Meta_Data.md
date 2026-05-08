# Exploring the Dev Tools and Meta Data
## Dev Tools
**View Fields**
* It tells who created the field.
* Shows the python technical name.
* Shows if the attribute is readonly or required
* Can be used to find the field names

**Technical Menu**
* Models : By searching the db name, I can see everything related to the database
* User interface -> Views : All view architecturesare available here. I can write xml updates and see the ui update realtime. But it won't update the actual code in the codebase. Whenever I restart the server using -u, it overwrites the view files. Thus in order to change something, I have to test here first first then c/p it into the ide.
* Access Rights : I can see exactly which groups are having permissions to CRUD operations.

**Edit View**

Bug -> Edit: Same as uI views

**F12 Key**

During an operation while on the browser, click on F12. It opens a tab . There filter it by XHR, perform any actions like save/new. And look for the call_kw request. It shows the python method being called and the arguments sent. In addition, *By checking the json response in the preview tab* , we can determine if the server is actually sending us the wrong values or the js is just displaying it incorrectly.


**Pointer Tool**

When I need to see any information about any attribute on the screen, I have to turn on the debug tool, and hover over any form field in order to reveal the '?' icon. It reveals the name, label and some more info about the attribute.

## Meta Data

**WorkFlow :** Turn on developer mode first, Go to any form view, Tap on the bug icon and it reveals information after pressing the metadata button.

*Attributes*

* ID	: Use this for raw SQL queries or debugging in the terminal.
* XML ID	: Use this to reference this record in other XML views or actions.
* Latest Update : It shows who updated the view and when.
* No update : False-> It's updatable