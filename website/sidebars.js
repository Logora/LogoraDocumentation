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
      items: ['installation/javascript', 'installation/wordpress', 'installation/api', 'installation/amp-sdk', 'installation/app-sdk'],
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
      items: ['configuration/theme', 'configuration/moderation'],
    },
  ],
};
