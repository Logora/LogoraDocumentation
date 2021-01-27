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
      items: ['authentication/introduction'],
    },
	{
      type: 'category',
      label: 'Configuration',
	  collapsed: false,
      items: ['configuration/theme', 'configuration/routes', 'configuration/moderation'],
    },
	{
      type: 'category',
      label: 'Questions fréquentes',
	  collapsed: false,
      items: ['faq/performance'],
    },
  ],
};
