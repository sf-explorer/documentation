// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SF Explorer',
  tagline: 'Salesforce Productivity Tool',
  url: 'http://info.sf-explorer.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sf-explorer',
  projectName: 'documentation', 
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sf-explorer/documentation/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/sf-explorer/documentation/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devops',
        path: 'devops',
        routeBasePath: 'devops',
        //sidebarPath: './sidebarDevops.js',
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SF Explorer',
        logo: {
          alt: 'Explorer',
          src: 'img/apple-touch-icon.png',
        },
       items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Explorer',
          },
          {to: 'devops', label: 'DevOps Center', position: 'left'},
          {to: 'blog', label: 'Blog', position: 'left'},
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn More',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/salesforce-explorer/',
              },
              {
                label: 'Youtube Channel',
                href: 'https://www.youtube.com/@SFExplorer',
              },
            ],
          },
          {
            title: 'Apps',
            items: [  
              {
                label: 'Web',
                href: 'https://app.sf-explorer.com',
              },
              {
                label: 'Chrome',
                href: 'https://chromewebstore.google.com/detail/sf-explorer/eabpolgjfkpchgffbkiedgfemcgbnbde',
              },
              {
                label: 'Edge',
                href: 'https://microsoftedge.microsoft.com/addons/detail/sf-explorer/poadmeoldhchlfeaiicmfjlfjmkjbgdh',
              },
            ],
          },
        ],
        copyright: `Made by Nicolas Despres while discovering salesforce ecosystem`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,      },
    }),
};

module.exports = config;
