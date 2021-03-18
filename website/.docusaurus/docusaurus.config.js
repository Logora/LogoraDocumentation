export default {
  "title": "Logora",
  "tagline": "La fin du commentaire, le début du débat",
  "url": "https://docs.logora.fr",
  "baseUrl": "/en/",
  "organizationName": "Logora",
  "projectName": "LogoraDocumentation",
  "favicon": "img/favicon.ico",
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "i18n": {
    "defaultLocale": "fr",
    "locales": [
      "fr",
      "en"
    ],
    "localeConfigs": {
      "en": {
        "label": "English"
      },
      "fr": {
        "label": "Français"
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "sidebars.json",
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
          "label": "Administration panel",
          "position": "left"
        },
        {
          "type": "localeDropdown",
          "position": "right"
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
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};