export default {
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
          "routeBasePath": "/",
          "path": "docs"
        },
        "theme": {
          "customCss": [
            "C:\\Users\\Henry\\Documents\\Projets\\Logora\\LogoraDocumentation\\website\\src\\css\\custom.css"
          ]
        }
      }
    ]
  ],
  "plugins": [],
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
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Logora",
      "style": "light"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};