# Vivy Component Library

React components used inside of our web apps.

# Quick Start

To get started just install the package via npm's registry:

`npm install @vivy/vivy-components`

or

`yarn install @vivy/vivy-components`

## Running story book locally

To serve the storybook just run `npm run storybook` which will serve locally on your machine via localhost.

## Component Development

To get started developing components first read [the storybook quickstart](https://storybook.js.org/basics/quick-start-guide/).

Essentially all you need is to create your component and link it together with the current stories in `stories/index.stories.js`.

## Automated deployment

Deployment for the component library is an automated process requiring three separate tasks:

- Deployment to Github
- Building and deploying to NPM
- Building and deploying to Github Pages

These tasks are automatically ran using [Circle CI](https://circleci.com/gh/UvitaTeam/) whenever a PR is accepted into the master branch.

## Tech Used

- Storybook
- React
- Styled components
- Webpack / Babel
