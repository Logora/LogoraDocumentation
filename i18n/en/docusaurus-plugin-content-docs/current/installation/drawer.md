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
