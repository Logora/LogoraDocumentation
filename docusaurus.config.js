module.exports={
  title: "Logora",
  tagline: "La fin du commentaire, le début du débat",
  url: "https://docs.logora.fr",
  baseUrl: "/",
  organizationName: "Logora",
  projectName: "LogoraDocumentation",
  favicon: "img/favicon.ico",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-GB',
      },
      fr: {
        label: 'Français',
        htmlLang: 'fr-FR',
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "sidebars.json",
          "routeBasePath": "/",
          "path": "docs"
        },
        "theme": {
          "customCss": [require.resolve('./src/css/custom.css')]
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: ["fr", "en"]
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "Logora",
      logo: {
        src: "img/logora_logo.png"
      },
      items: [
        {
          to: "/",
          label: "Documentation",
          position: "left"
        },
        {
          href: "https://admin.logora.fr",
          label: "Administration",
          position: "left"
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Logora/LogoraDocumentation',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ]
    },
    footer: {
      links: [],
      copyright: "Copyright © 2022-23 Logora",
    }
  }
}
