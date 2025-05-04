# afadeev.com

Personal website of Alex Fadeev, built with [Docusaurus](https://docusaurus.io/).

## Features
- Custom About page with profile, skills, and contact info
- Telegram, Substack, and Goal Setting Guide integrations
- Custom favicon and logo
- Custom 404 page
- Google Analytics (GA4)
- Sitemap.xml for SEO
- Security headers (CSP, HSTS, etc.) for Netlify

## Installation

```sh
npm install
```

## Local Development

```sh
npm start
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```sh
npm run build
```
The static site will be output to the `build/` directory.

## Deployment
- Deploy the contents of `build/` to your static host (Netlify, Vercel, etc.)
- For Netlify, the `_headers` file in `static/` will be copied to the root for security headers.

## Security
- Security headers and CSP are set via `static/_headers` (for Netlify)
- All external links use `rel="noopener noreferrer"`

## Analytics
- Google Analytics 4 is enabled (G-DL7LD861H6)

## Sitemap
- A `sitemap.xml` is generated automatically at build time

## Custom 404
- A custom 404 page is shown for all unknown routes

## Maintenance
- To update dependencies: `npm update`
- To check for vulnerabilities: `npm audit`
- To clear cache: `npm run clear`

## License
MIT
