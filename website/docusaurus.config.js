module.exports={
  "title": "Logora",
  "tagline": "La fin du commentaire, le début du débat",
  "url": "https://master.d24s2qxlp9xzpm.amplifyapp.com",
  "baseUrl": "/",
  "organizationName": "Logora",
  "projectName": "LogoraDocumentation",
  "favicon": "img/favicon.ico",
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "sidebars.js",
		  "path": "docs"
        },
        "theme": {
          "customCss": [require.resolve('./src/css/custom.css')]
        }
      }
    ]
  ],
  "plugins": [
	[
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/',
            from: ['/dmlkmklmlkmlkocs'],
          },
        ],
      },
	]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Logora",
      "logo": {
        "src": "img/logora_logo.png"
      },
      "items": [
        {
          "to": "/",
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
    }
  }
}