# Vivy Component Library

A collection of react components used for Vivy web apps.

# Quick Start

You can install the component library in two ways: the tarball or from the repo.

Since the tarball is contained in a private repo (and access keys shouldn't be stored in version control), you'll need to download the tarball manually and place it somewhere in your project. Then you can add it to your package.json by:

`"vivy-components": "../folder/location/<tag>.tar.gz"`

The main advantages of the tarball is that it is already transpiled to ES5 (making it plug and play) and it is available offline.

Alternatively you can install the library directly from git itself which requires a valid ssh key and access to Vivy's github:

`"vivy-components": "git+ssh://github.com/UvitaTeam/vivy-components.git"`.

You will also need to transpile this library using babel since it is written in ES6 (and is not transpiled down to ES5).

## Updates

You can also follow the `master` branch to get latest updates or you can specify branches and tags. It is recommended to use a tag so that way new changes won't break your current layout until you're ready to upgrade.

Use with a branch:
`"vivy-components": "git+ssh://github.com/UvitaTeam/vivy-components.git#<branch>"`

Use with a tag:
`"vivy-components": "git+ssh://github.com/UvitaTeam/vivy-components.git#<tag>"`

## Running story book locally

To serve the storybook just run `npm run storybook`. This will display the component library on `localhost:3006`.

## Component Development

To get started developing components first read [the storybook quickstart](https://storybook.js.org/basics/quick-start-guide/).

Essentially all you need is to create your component and link it together with the current stories in `stories/index.stories.js`.

## Automated deployment

When changes are merged into master the deployment process on CircleCI will automatically increment the build number, add a tag, compile a transpiled tarball, and compile storybook static assets that are pushed to gh-pages branch of the vivy-component library repo. This will, in short, generate a usable libarary and viewable static website.

## Tech Used

- Storybook
- React
- Styled components
- Webpack
- Babel (ES6)
