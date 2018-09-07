# Vivy Component Library

React components used inside of our web apps.

# Demo 

Live version of it can be found [here](https://uvitateam.github.io/vivy-components/storybook-static/)

# Quick Start

To get started just install the package via npm's registry:

`npm install @vivy/vivy-components`

or

`yarn install @vivy/vivy-components`

## Running story book locally

To serve the storybook just run `npm run storybook` which will serve locally on your machine via localhost.

## Design

For the most part all designs laid out in this component library are spearheaded by Vivy design - therefore we take
a lot of our design cues directly from them. In case a design does not exist, grab a designer and talk over the implementation
details with them. You can always create a quick placeholder - but official design must be signed off and accepted by the design team.

You can find all current, updated, and new designs in the [Vivy zeplin Web UIs project](https://app.zeplin.io/)

## Component Development

To get started developing components first read [the storybook quickstart](https://storybook.js.org/basics/quick-start-guide/).

Essentially all you need is to create your component and link it together with the current stories in `stories/index.stories.js`.

## Automated Deployment

Deployment for the component library is an automated process requiring three separate tasks:

- Testing: Building, linting, and unit testing code
- Packaging: Deploying the npm package
- Website: Deploying storybook static assets to Github pages

All tasks are ran using [Circle CI](https://circleci.com/gh/UvitaTeam/) whenever any changes are detected (excluding the master branch). Both the packaging and website steps are only triggered when a new tag is added to the project. To handle releases we use Github's release interface which will automatically run the steps necessary to make new changes available.

## Tech Used

- Storybook
- React
- Styled components
- Webpack / Babel
