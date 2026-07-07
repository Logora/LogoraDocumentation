---
id: drawer
title: Drawer integration
---

This documentation complements the "classic" installation via Javascript or server-side. 

The debate space can be integrated as a drawer that opens from the right of the screen ([demo](https://demo.logora.fr/drawer.html)).

In any case, the first step is to set up a "classic" discussion forum. 


#### Installation

Insert the script that manages the drawer integration in the page, in the head tag.

```html
 <!DOCTYPE html>
 <html>
   <head>
     <script src="https://cdn.logora.com/drawer.js"></script>
   </head>
 </html>
```


#### Advanced usage (optional)

Two events are available to control the drawer :

- *logora:drawer:display* to open the drawer, and that takes the initial path of the debate space as an argument :

```js
 const event = new CustomEvent("logora:drawer:display", { detail: { initialPath: "/debate/my-debate" }});
 window.dispatchEvent(event);
```

- *logora:drawer:close* to close the drawer

```js
  const event = new CustomEvent("logora:drawer:close");
  window.dispatchEvent(event);
```

#### Disable the drawer for a specific Logora embed
If you want to disable the drawer for a specific Logora embed, you can do so by adding the data-disable-drawer attribute directly to the ``` <div> ``` of the embed. This will prevent the drawer from being triggered for that specific instance. For example:

```html
<div class="logora_embed" data-object-id="logora_config" data-disable-drawer></div>
```
This attribute disables the drawer for this embed only, while keeping the default behavior for others. This can be useful if, for example, you want to display comments with drawer navigation in the article page, but prefer to show other modules like debates on a dedicated page rather than inside the drawer.
