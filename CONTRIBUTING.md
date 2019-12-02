# Contributing

Before contributing to this repository, please read through these guidelines
carefully. Pull requests that do not follow the process outlined below will be
closed.

# Git Workflow

We follow a feature-branch flow. Everything is merged into `develop` which will
be merged into `master`. We have continuous integration set up on `master`, so
any merged pull request will trigger a redeployment for both the API and the
client-side application.

**Never commit to `master`. Only merge hot-fixes to `master`.**

## Branches

* `master` - production code. Automatically deployed on merge
* `develop` - queued for production. Code on `develop` is ready to be deployed
* `feature` - branch for a given feature. Should be made from `develop`. Make
    a pull request if you'd like your branch reviewed and merged.
* `hotfix` - for time sensitive bug fixes. Create a `hotfix` branch off of
    master, fix the issue and then make a pull request to `master`. Then, update
    `develop` by merging `master` into `develop`

## Code Reviews

**You are not allowed to merge your own features into `develop` without it first
being reviewed.**

When you finish a ticket, you should open a pull request immediately. This gives
reviewers the opportunity to provide feedback while you continue working.

Your pull request will be reviewed and you will be given feedback. The reviewer
will merge your pull request if it is ready for production. Otherwise, you will
be asked to implement the feedback provided by the reviewer.

## Issues

All work should be captured by an issue assigned to a [ project ](). This
includes user stories, features, and bug fixes.
