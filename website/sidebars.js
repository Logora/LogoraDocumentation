module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
    },
	{
      type: 'category',
      label: 'Installation',
	  collapsed: false,
      items: ['installation/javascript-sdk', 'installation/wordpress', 'installation/server-side-sdk', 'installation/amp-sdk', 'installation/app-sdk'],
    },
	{
      type: 'category',
      label: 'Authentification unique',
      items: ['authentication/introduction', 'authentication/oauth2', 'authentication/jwt', 'authentication/cookie'],
    },
	{
      type: 'category',
      label: 'Configuration',
	  collapsed: false,
      items: ['configuration/theme', 'configuration/routes', 'configuration/moderation', 'configuration/ads'],
    },
	{
      type: 'category',
      label: 'Questions fréquentes',
	  collapsed: false,
      items: ['faq/performance', 'faq/rgpd'],
    },
  ],
};
