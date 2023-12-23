// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SF Explorer',
  tagline: 'Salesforce Productivity Tool',
  url: 'http://info.sf-explorer.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/sf-explorer/documentation/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sf-explorer/documentation/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
            label: 'Documentation',
          },
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
        ],
        copyright: `Made by Nicolas Despres while discovering salesforce ecosystem`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
