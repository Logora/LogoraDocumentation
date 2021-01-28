
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
  path: '/docs',
  component: ComponentCreator('/docs','799'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','fdb'),
  exact: true,
},
{
  path: '/docs/authentication/cookie',
  component: ComponentCreator('/docs/authentication/cookie','50c'),
  exact: true,
},
{
  path: '/docs/authentication/introduction',
  component: ComponentCreator('/docs/authentication/introduction','e0f'),
  exact: true,
},
{
  path: '/docs/authentication/jwt',
  component: ComponentCreator('/docs/authentication/jwt','157'),
  exact: true,
},
{
  path: '/docs/authentication/oauth2',
  component: ComponentCreator('/docs/authentication/oauth2','a84'),
  exact: true,
},
{
  path: '/docs/configuration/ads',
  component: ComponentCreator('/docs/configuration/ads','9a8'),
  exact: true,
},
{
  path: '/docs/configuration/moderation',
  component: ComponentCreator('/docs/configuration/moderation','a96'),
  exact: true,
},
{
  path: '/docs/configuration/routes',
  component: ComponentCreator('/docs/configuration/routes','c73'),
  exact: true,
},
{
  path: '/docs/configuration/theme',
  component: ComponentCreator('/docs/configuration/theme','e22'),
  exact: true,
},
{
  path: '/docs/faq/performance',
  component: ComponentCreator('/docs/faq/performance','688'),
  exact: true,
},
{
  path: '/docs/installation/amp-sdk',
  component: ComponentCreator('/docs/installation/amp-sdk','426'),
  exact: true,
},
{
  path: '/docs/installation/app-sdk',
  component: ComponentCreator('/docs/installation/app-sdk','789'),
  exact: true,
},
{
  path: '/docs/installation/javascript-sdk',
  component: ComponentCreator('/docs/installation/javascript-sdk','7fd'),
  exact: true,
},
{
  path: '/docs/installation/server-side-sdk',
  component: ComponentCreator('/docs/installation/server-side-sdk','55c'),
  exact: true,
},
{
  path: '/docs/installation/wordpress',
  component: ComponentCreator('/docs/installation/wordpress','61b'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
