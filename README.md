# Vivy Component Library

React components used inside of our web apps.

# Adding vivy components to your project

To get started just install the package via npm's registry:

`npm install @vivy/vivy-components`

or

`yarn add @vivy/vivy-components`

## Contributing to the project (designers and devs)

When adding new components and styles to Vivy components just make sure to keep the PR small and keep it
focused in scope while avoiding unrelated commits and changes.

- Clone the project by running `git clone git@github.com:VivyTeam/vivy-components.git`
- Navigate to the component library `cd vivy-components`
- Create a new branch for your feature `git checkout -b cool.new.feature`
- Install all the projects dependencies `npm install`
- Run the project on https://localhost:3006 to preview changes `npm run serve`
- Make your changes. The src/ folder is where the components live, stories/ contain all the documentation
- Add your changes `git add myFeature.js` and commit them `git commit -m "Updated some cool styles"`
- Push your branch `git push origin cool.new.feature`
- Submit a [pull request](https://github.com/VivyTeam/vivy-components/pulls) and add details about your changes
- Add a reviewer (or ask someone in person) to go over your changes
- If all goes well click the "Squash and Merge" button to close your PR (make sure to clean up and delete your branch)
- To see your changes live (in both the lib and storybook website) make a new release via github!

## Running story book locally

To serve the storybook just run `npm run serve` which will serve locally on your machine via localhost.

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

All tasks are ran using [Circle CI](https://app.circleci.com/pipelines/github/VivyTeam/vivy-components/) whenever any changes are detected (excluding the master branch). Both the packaging and website steps are only triggered when a new tag is added to the project. To handle releases we use Github's release interface which will automatically run the steps necessary to make new changes available.

#### To specify a target branch and serve your storybook with rawgit instead of gh-pages:

1.  run the command

```
npm run storybook:publish -- --branch={{branch-name}}
```

2.  visit https://rawgit.com/VivyTeam/vivy-components/{{branch-name}}/

## Tech Used

- Storybook
- React
- Styled components
- Webpack / Babel
