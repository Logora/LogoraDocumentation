module.exports={
  "title": "Logora",
  "tagline": "La fin du commentaire, le début du débat",
  "url": "https://master.d24s2qxlp9xzpm.amplifyapp.com",
  "baseUrl": "/",
  "organizationName": "Logora",
  "projectName": "LogoraDocumentation",
  "favicon": "img/favicon.ico",
  "customFields": {},
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "sidebars.js",
		  "routeBasePath": "/",
		  "path": "docs"
        },
        "blog": {},
        "theme": {
          "customCss": "..\\src\\css\\customTheme.css"
        }
      }
    ]
  ],
  "plugins": [
  ],
  "themeConfig": {
    "navbar": {
      "title": "Logora",
      "logo": {
        "src": "img/logora_logo.png"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Documentation",
          "position": "left"
        },
        {
          "href": "https://admin.logora.fr",
          "label": "Espace d'administration",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Logora",
      "logo": {
        "src": "img/logora_logo.png"
      }
    }
  }
}