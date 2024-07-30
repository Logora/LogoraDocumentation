---
id: drawer
title: Drawer integration
---

This documentation complements the "classic" installation via Javascript or server-side. 

The debate space can be integrated as a drawer that opens from the right of the screen ([demo](https://demo.logora.fr/drawer.html)).

In any case, the first step is to set up a "classic" discussion forum. 

#### Activation from your administration area

From your administration area, go to “Configuration” > “Modules” and activate drawer mode installation. 

![Drawer navigation](static/img/drawernavigation.png)

#### Code installation

Insert the script that manages the drawer integration in the page, in the head tag, as well as a tag with the identifier *logora_app*, and the Logora configuration parameters.

```html
 <!DOCTYPE html>
 <html>
   <head>
     <script>
       var logora_config = {
         "shortname": "demo"
       };
     </script>
     <script src="https://cdn.logora.com/drawer.js"></script>
   </head>
   <body>
     <div id="logora_app"></div>
   </body>
 </html>
```

The tag with the *logora_app* id can be placed anywhere, as the drawer opens on top of the page.

#### Usage (optional and advanced)

To open the drawer, use the *logora:drawer:display* event with the path of the debate space page as an argument:

```js
 const event = new CustomEvent("logora:drawer:display", { detail: { initialPath: "/debate/my-debate" }});
 window.dispatchEvent(event);
```
