
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/en/',
  component: ComponentCreator('/en/','d95'),
  
  routes: [
{
  path: '/en/',
  component: ComponentCreator('/en/','79f'),
  exact: true,
},
{
  path: '/en/authentication/introduction',
  component: ComponentCreator('/en/authentication/introduction','eb0'),
  exact: true,
},
{
  path: '/en/authentication/jwt',
  component: ComponentCreator('/en/authentication/jwt','e58'),
  exact: true,
},
{
  path: '/en/authentication/oauth2',
  component: ComponentCreator('/en/authentication/oauth2','f1b'),
  exact: true,
},
{
  path: '/en/authentication/oauth2_server',
  component: ComponentCreator('/en/authentication/oauth2_server','6ce'),
  exact: true,
},
{
  path: '/en/configuration/ads',
  component: ComponentCreator('/en/configuration/ads','429'),
  exact: true,
},
{
  path: '/en/configuration/moderation',
  component: ComponentCreator('/en/configuration/moderation','e9f'),
  exact: true,
},
{
  path: '/en/configuration/routes',
  component: ComponentCreator('/en/configuration/routes','b18'),
  exact: true,
},
{
  path: '/en/configuration/theme',
  component: ComponentCreator('/en/configuration/theme','747'),
  exact: true,
},
{
  path: '/en/faq/performance',
  component: ComponentCreator('/en/faq/performance','a16'),
  exact: true,
},
{
  path: '/en/faq/rgpd',
  component: ComponentCreator('/en/faq/rgpd','0e8'),
  exact: true,
},
{
  path: '/en/installation/amp-sdk',
  component: ComponentCreator('/en/installation/amp-sdk','37b'),
  exact: true,
},
{
  path: '/en/installation/app-sdk',
  component: ComponentCreator('/en/installation/app-sdk','c1d'),
  exact: true,
},
{
  path: '/en/installation/javascript-sdk',
  component: ComponentCreator('/en/installation/javascript-sdk','7e5'),
  exact: true,
},
{
  path: '/en/installation/server-side-sdk',
  component: ComponentCreator('/en/installation/server-side-sdk','683'),
  exact: true,
},
{
  path: '/en/installation/wordpress',
  component: ComponentCreator('/en/installation/wordpress','31e'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
