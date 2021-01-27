
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','4c6'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','76b'),
  exact: true,
},
{
  path: '/authentication/cookie',
  component: ComponentCreator('/authentication/cookie','c66'),
  exact: true,
},
{
  path: '/authentication/introduction',
  component: ComponentCreator('/authentication/introduction','ea0'),
  exact: true,
},
{
  path: '/authentication/jwt',
  component: ComponentCreator('/authentication/jwt','888'),
  exact: true,
},
{
  path: '/authentication/oauth2',
  component: ComponentCreator('/authentication/oauth2','8a0'),
  exact: true,
},
{
  path: '/configuration/ads',
  component: ComponentCreator('/configuration/ads','35b'),
  exact: true,
},
{
  path: '/configuration/moderation',
  component: ComponentCreator('/configuration/moderation','b1a'),
  exact: true,
},
{
  path: '/configuration/routes',
  component: ComponentCreator('/configuration/routes','e62'),
  exact: true,
},
{
  path: '/configuration/theme',
  component: ComponentCreator('/configuration/theme','591'),
  exact: true,
},
{
  path: '/faq/performance',
  component: ComponentCreator('/faq/performance','185'),
  exact: true,
},
{
  path: '/installation/amp-sdk',
  component: ComponentCreator('/installation/amp-sdk','f30'),
  exact: true,
},
{
  path: '/installation/app-sdk',
  component: ComponentCreator('/installation/app-sdk','f89'),
  exact: true,
},
{
  path: '/installation/javascript-sdk',
  component: ComponentCreator('/installation/javascript-sdk','974'),
  exact: true,
},
{
  path: '/installation/server-side-sdk',
  component: ComponentCreator('/installation/server-side-sdk','4b6'),
  exact: true,
},
{
  path: '/installation/wordpress',
  component: ComponentCreator('/installation/wordpress','8cb'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
