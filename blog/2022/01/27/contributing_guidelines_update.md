---
title: Contributing Guidelines Update
description: "Contributing is a great way to learn more about social coding on Github, new technologies, and their ecosystems."
slug: contributing-guidelines-update
authors:
  - name: Salvydas Lukosius
    title: Z-Shell ZI Maintainer
    url: https://github.com/ss-o
    image_url: https://github.com/ss-o.png
tags: [opensource, productivity, github, codenewbie]
image: /img/logo/501x501.png
hide_table_of_contents: true
---

For convenience before contributing, please first discuss the change you wish to make via issue, email, or any other method with the owners of the repository before making a change. Please familiarize yourself with our [code of conduct](https://github.com/z-shell/zi/blob/main/docs/CODE_OF_CONDUCT.md) while making interactions across the organization.

## Knowledge Base

- [ZI Wiki](https://z-shell.pages.dev)
- [Zsh Plugin Standard](https://z-shell.github.io/docs/zsh/Zsh-Plugin-Standard.html)
- [Zsh Native Scripting Handbook](https://z-shell.github.io/docs/zsh/Zsh-Native-Scripting-Handbook.html)

### Need some help regarding the basics?🤔

You can refer to the following articles on the basics of Git and Github and also contact the Project Mentors,
in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)

## Submitting Contribution

Below you will find the process and workflow used to review and merge your changes.

### Step 0 : Find an issue

- Take a look at the Existing Issues or create your **own** Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- Note: Every change in this project should/must have an associated issue.

### Step 1: Fork the Project

- Fork this Repository. This will create a local copy of this Repository on your Github profile.
  Keep a reference to the original project in `upstream` remote.

```bash
git clone https://github.com/<your-username>/<repo-name>
cd <repo-name>
git remote add upstream https://github.com/z-shell/<repo-name>
```

- If you have already forked the project, update your copy before working.

```bash
git remote update
git checkout <branch-name>
git rebase upstream/<branch-name>
```

### Step 2 : Branch

Create a new branch. Use its name to identify the issue you addressing.

```bash
# It will create a new branch with the name Branch_Name and switch to that branch
git checkout -b branch_name
```

### Step 3: Work on the issue assigned

- Work on the issue(s) assigned to you.
- Add all the files/folders needed.
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:

```bash
# To add all new files to branch branch_name
git add.

# To add only a few files to branch_name
git add <some files>
```

### Step 4 : Commit

- To commit give a descriptive message for the convenience of the reviewer by:

```bash
# This message get associated with all files you have changed
git commit -m "message"
```

- **NOTE**: A PR should have only one commit. Multiple commits should be squashed.

### Step 5: Work Remotely

- Now you are ready to your work to the remote repository.
- When your work is ready and complies with the project conventions, upload your changes to your fork:

```bash
# To push your work to your remote repository
git push -u origin branch_name
```

### Step 6 : Pull Request

- Go to your repository in the browser and click on compare and pull requests.
  Then add a title and description to your pull request that explains your contribution.

## Recommendations

- Any files to support the preferred editor should be collaborated and respected across organization repositories e.g: [editorconfig](https://gist.github.com/ss-o/1e8d9f3a710f78330a09ccc47ef6ddb2).
- Write comments extensively as we use: [Doxygen For Shell Scripts](https://github.com/z-shell/zsdoc) which parses Zsh and Bash scripts.
- Get familiar with [Conventional commits](https://www.conventionalcommits.org) and [ZenHub](https://go.zenhub.com).

### Issues and feature requests

You've found a bug in the source code, a mistake in the documentation or maybe you'd like a new feature? 
Take a peek at [GitHub Discussions](https://github.com/z-shell/zi/discussions) to see if it's already being discussed. 
You can help us by [submitting an issue on GitHub](https://github.com/z-shell/zi/issues). Before you create an issue, make sure to search the issue archive -- your issue may have already been addressed!

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

**Even better: Submit a pull request with a fix or new feature!**

### How to submit a Pull Request

1. Search our repository for open or closed
   [Pull Requests](https://github.com/z-shell/zi/pulls)
   that relates to your submission. You don't want to duplicate effort.
2. Fork the project
3. Create your feature branch (`git checkout -b feat/amazing_feature`)
4. Commit your changes (`git commit -m 'feat: add amazing_feature'`) Z-Shell ZI uses [conventional commits](https://www.conventionalcommits.org), so please follow the specification in your commit messages.
5. Push to the branch (`git push origin feat/amazing_feature`)
6. [Open a Pull Request](https://github.com/z-shell/zi/compare?expand=1)

#### Clean Pull Request

Contributing is also a great way to learn more about social coding on Github, new technologies and their ecosystems, and how to make constructive, helpful bug reports, feature requests, and the noblest of all contributions: a good, clean pull request.

- Create a personal fork of the project on Github.
- Clone the fork on your local machine. Your remote repo on Github is called `origin`.
  - `git clone https://github.com/{YOUR-USERNAME}/zi`
- Add the original repository as a remote called `upstream`.
  - `git remote add upstream https://github.com/z-shell/zi.git`
- If you created your fork a while ago be sure to pull upstream changes into your local repository.
- Create a new branch to work on! A branch from `develop` if it exists, else from `main`.
- Implement/fix your feature, comment on your code.
- Follow the code style of the project, including indentation.
- If there are related tests please run them.
- Write or adapt tests as needed.
- Add or change the documentation as needed.
- Squash your commits into a single commit with git's [interactive rebase](https://help.github.com/articles/interactive-rebase). Create a new branch if necessary.
- Push your branch to your fork on Github, the remote `origin`.
- From your fork open a pull request in the correct branch. Target the project's `develop` branch if there is one, else go for `main`!
- Once the pull request is approved and merged you can pull the changes from `upstream` to your local repo and delete
  your extra branch(es).

> Always write your commit messages in the present tense. Your commit message should describe what the commit when applied, does to the code – not what you did to the code. ([examples](https://www.google.com/search?q=english+"present+tense+example"))

### Commit messages

- Use the Present Tense ("Add feature" not "Added feature").
- Use the Imperative Mood ("Move file to..." not "Moves file to...").
- Limit the subject line to 50 characters
- Wrap the body at 72 characters
- Reference issues and pull requests, where possible.

- Be creative with emojies
  - :tada: `:tada:` Initial commit
  - :art: `:art:` when improving the format/structure of the code
  - :racehorse: `:racehorse:` when improving performance
  - :books: `:books:` when writing docs
  - :pencil2: `:pencil2:` when fixing typos
  - :bug: `:bug:` when fixing a bug
  - :fire: `:fire:` when removing code or files
  - :green_heart: `:green_heart:` when fixing the CI build
  - :white_check_mark: `:white_check_mark:` when adding tests
  - :lock: `:lock:` when dealing with security
  - :heavy_plus_sign: `:heavy_plus_sign:` when adding new dependencies
  - :arrow_up: `:arrow_up:` when upgrading dependencies
  - :arrow_down: `:arrow_down:` when downgrading dependencies
  - :shirt: `:shirt:` when removing linter warnings
  - :construction: `:construction:` work in progress
  - :sparkles: `:sparkles:` when adding feature
  - :lipstick: `:lipstick:` when improving UI
  - :gem: `:gem:` new release
  - :rocket: `:rocket:` Anything related to Deployments/DevOps

### Do not add images, rather 👇

Instead of adding non-essential images to the repository link them to markdown files.

#### How to do that?

- You can do that by hosting all your images and screenshots to any images hosting sites such as [imgur](https://imgur.com/), [imgbb](https://imgbb.com/), [postimages](https://postimages.org/).
- Then link your uploaded images to README files.

## Community membership

### New contributors

New contributors should be welcomed to the community by existing members,
helped with PR workflow, and directed to relevant documentation and
communication channels.

### Member

Members are continuously active contributors to the community. They can have
issues and PRs assigned to them, and pre-submit tests are automatically run for their PRs. Members are expected to remain active contributors to the community.

### Established community members

Established community members are expected to demonstrate their adherence to the principles in this document.
Familiarity with project organization, roles, policies, procedures, conventions, etc., and technical and/or writing ability.
Role-specific expectations, responsibilities, and requirements are enumerated
below.

### Requirements

- Enabled two-factor authentication on their GitHub account.
- Actively contributing to 1 or more repositories alternatively ensure your sponsors are @mentioned on the issue.

This section outlines the various responsibilities of contributor roles in
Z-shell. Responsibilities for most roles are scoped to these subprojects.

| Role     | Responsibilities                        | Requirements                                                       | Defined by                                                |
| -------- | --------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------- |
| Member   | active contributor in the community     | Sponsored by reviewers or multiple contributions to the project    | Z-shell GitHub org member                                 |
| Reviewer | Review contributions from other members | History of review and authorship in a subproject                   | [CODEOWNERS](https://github.com/z-shell/zi/blob/main/.github/CODEOWNERS) file reviewer entry |
| Approver | Contributions acceptance approval       | Highly experienced active reviewer and contributor to a subproject | [CODEOWNERS](https://github.com/z-shell/zi/blob/main/.github/CODEOWNERS) file approver entry |

[**Membership request**](https://github.com/z-shell/zi/issues/new?assignees=&labels=&template=05_membership.yml&title=team%3A+new+member+request)

