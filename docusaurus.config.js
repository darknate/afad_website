// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alex Fadeev',
  tagline: 'If you don\'t like my story, write your own',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://afadeev.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'afadeev', // Usually your GitHub org/user name.
  projectName: 'afad_website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_sh.png',
      navbar: {
        title: 'Alex Fadeev',
        logo: {
          alt: 'Alex Fadeev Logo',
          src: 'img/logo_sh.png',
        },
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {href: 'https://blog.afadeev.com', label: 'Blog', position: 'left'},
          {
            href: 'https://t.me/digital_ponos',
            position: 'right',
            className: 'header-telegram-link',
            'aria-label': 'Telegram channel',
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © 2014-${new Date().getFullYear()} Alex Fadeev`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-DL7LD861H6',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        filename: 'sitemap.xml',
      },
    ],
  ],
};

export default config;
