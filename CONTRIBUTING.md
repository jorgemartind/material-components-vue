# Contributing to material-components-vue

## Commit guideline

This project use the `standard-version` package to version the NPM package and generate automatically a changelog. Because of this all commits to master should follow the [Conventional Commits Specification](https://conventionalcommits.org/).

## Contribution workflow

The changes should be developed in your own fork and based on branches.
When you have finished your work you create a PR (pull request) on Github.
PRs should be squashed to one commit on master - following the commit [guideline](#commit-guideline).

## Component development

All components should be placed in the `components` directory. Every component has a `README` in it's root directory that documentate the component. Component tests should placed in the `__tests__` directory in each component. Additionally each component should have a demo in `docs/.vuepress/components` and registered in `docs/.vuepress/README.md`.

## Upgrading mdc-web

Please be sure that you switch to the right versioned tag when you want to upgrade to a specific version of mdc-web.

## Setup project

Fork the project on Github and clone your own repository to your machine.
This project uses yarn as default packagemanager - so be sure to install yarn first. After that install all dependencies with:

```shell
$ yarn
```

### Build all components (dev)
```shell
$ yarn build
```

### Build all components (dev) in watch-mode
```shell
$ yarn watch:dev
```

### Build all components (prod)
```shell
$ yarn build:min
```

### Serve docs (dev)
```shell
$ yarn docs:dev
```

### Build docs (prod)
```shell
$ yarn docs:prod
```

### Run tests
```shell
$ yarn test
```

### Run tests in watch-mode
```shell
$ yarn test:watch
```

### Run tests and update snapshots
```shell
$ yarn test:updateSnapshot
```

### Lint all files (js/vue)
```shell
$ yarn lint
```
