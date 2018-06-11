# Vivy Component Library

A collection of react components used for Vivy web apps.

To add to your project add the following to your ```package.json```:

```"vivy-components": "git+ssh://github.com/UvitaTeam/vivy-components.git"```. This will require you to have a valid ssh key and access to the Vivy github.

## Story Book

To serve the storybook just run ```npm run storybook```.

## Component Development

To get started developing components first read [the storybook quickstart](https://storybook.js.org/basics/quick-start-guide/).

Essentially all you need is to create your component and link it together with the current stories.

## Updating hosted Storybook

The component library runs on github pages and hosts a simple static site. To update this site after creating a new component all you need to do is run ```npm run build:storybook```. This will generate any new static assets that were created and allow the static website to display the components.

After building the story book just commit the new changes and submit a PR.

## Publishing Library

To deploy new components for the library you first need to transpile the source folder from es6 to backwards compatible javascript. To do this run ```npm run build:package``` and increment the version number in ```package.json``` and create a new git tag. For example, if you're creating version 1, first change the ```package.json``` version to ```"version": "1.0.0"```. Next create a git tag by entering the commands:

```
git add new_file.txt && git commit -m "Add new_file.txt"
git tag 1.0.0
git push origin 1.0.0
git push origin your_pr_branch
```

This will point the newest changes to the 1.0.0 tag and allow users to specify a tag to target in their ```package.json```.

## Tech Used

* Storybook
* React
* Styled components
* Webpack
* Babel (ES6)
