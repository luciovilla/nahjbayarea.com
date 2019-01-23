# gatsby-casper

Demo: https://gatsby-casper.netlify.com/  

This is a static blog generator and starter gatsby repo. A port of [Casper](https://github.com/TryGhost/Casper) v2 a theme from [Ghost](https://ghost.org/) for [GatsbyJS](https://www.gatsbyjs.org/) using [TypeScript](https://www.typescriptlang.org/).

## Getting Started
Edit website-config.ts with your website settings.
Either disable subscribe or setup a mailchimp list and add the form action and hidden field input name.

## Edits
`gatsby-config.js`
- 

index.tsx
- had to update graphql query due to changing the image names for logo and background cover


installed less 
https://www.gatsbyjs.org/packages/gatsby-plugin-less/?=gatsby%20plugin%20less#v200

## Deploy to Github pages
- npm install gh-pages --save-dev
- and append this deploy script in your package.json file:
```
"deploy": "gatsby build --prefix-paths && gh-pages -d public",
```
