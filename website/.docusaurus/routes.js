
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/en/__docusaurus/debug',
  component: ComponentCreator('/en/__docusaurus/debug','53a'),
  exact: true,
},
{
  path: '/en/__docusaurus/debug/config',
  component: ComponentCreator('/en/__docusaurus/debug/config','271'),
  exact: true,
},
{
  path: '/en/__docusaurus/debug/content',
  component: ComponentCreator('/en/__docusaurus/debug/content','77e'),
  exact: true,
},
{
  path: '/en/__docusaurus/debug/globalData',
  component: ComponentCreator('/en/__docusaurus/debug/globalData','63e'),
  exact: true,
},
{
  path: '/en/__docusaurus/debug/metadata',
  component: ComponentCreator('/en/__docusaurus/debug/metadata','0e8'),
  exact: true,
},
{
  path: '/en/__docusaurus/debug/registry',
  component: ComponentCreator('/en/__docusaurus/debug/registry','d80'),
  exact: true,
},
{
  path: '/en/__docusaurus/debug/routes',
  component: ComponentCreator('/en/__docusaurus/debug/routes','127'),
  exact: true,
},
{
  path: '/en/',
  component: ComponentCreator('/en/','6cc'),
  
  routes: [
{
  path: '/en/',
  component: ComponentCreator('/en/','cb1'),
  exact: true,
},
{
  path: '/en/authentication/introduction',
  component: ComponentCreator('/en/authentication/introduction','dde'),
  exact: true,
},
{
  path: '/en/authentication/jwt',
  component: ComponentCreator('/en/authentication/jwt','440'),
  exact: true,
},
{
  path: '/en/authentication/oauth2',
  component: ComponentCreator('/en/authentication/oauth2','39b'),
  exact: true,
},
{
  path: '/en/authentication/oauth2_server',
  component: ComponentCreator('/en/authentication/oauth2_server','153'),
  exact: true,
},
{
  path: '/en/configuration/ads',
  component: ComponentCreator('/en/configuration/ads','1f5'),
  exact: true,
},
{
  path: '/en/configuration/moderation',
  component: ComponentCreator('/en/configuration/moderation','4d2'),
  exact: true,
},
{
  path: '/en/configuration/routes',
  component: ComponentCreator('/en/configuration/routes','364'),
  exact: true,
},
{
  path: '/en/configuration/theme',
  component: ComponentCreator('/en/configuration/theme','437'),
  exact: true,
},
{
  path: '/en/faq/performance',
  component: ComponentCreator('/en/faq/performance','e0b'),
  exact: true,
},
{
  path: '/en/faq/rgpd',
  component: ComponentCreator('/en/faq/rgpd','17e'),
  exact: true,
},
{
  path: '/en/installation/amp-sdk',
  component: ComponentCreator('/en/installation/amp-sdk','ef9'),
  exact: true,
},
{
  path: '/en/installation/app-sdk',
  component: ComponentCreator('/en/installation/app-sdk','180'),
  exact: true,
},
{
  path: '/en/installation/javascript-sdk',
  component: ComponentCreator('/en/installation/javascript-sdk','31c'),
  exact: true,
},
{
  path: '/en/installation/server-side-sdk',
  component: ComponentCreator('/en/installation/server-side-sdk','a89'),
  exact: true,
},
{
  path: '/en/installation/wordpress',
  component: ComponentCreator('/en/installation/wordpress','ef3'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
