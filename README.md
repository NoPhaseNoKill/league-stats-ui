# dota-stats-ui [![Build Status](https://travis-ci.com/NoPhaseNoKill/dota-stats-ui.svg?branch=master)](https://travis-ci.com/NoPhaseNoKill/dota-stats-ui)

Dota Stats UI: A web interface for viewing everything stats related for Dota 2.

## Quickstart

- Clone the repo using `git clone git://github.com/NoPhaseNoKill/dota-stats-ui.git`

### Before starting app

- Install Yarn
- Install project dependencies with `yarn install`
- Get Steam API key from https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey
- Create .env file in root directory
- Add STEAM_API=XXXXXXXXXXXXX (your key instead of XXXXXX) to .env file
- If you would like IntelliSense for styled-components' template literals, please download relevant IDE plugin
  - VSCode: https://github.com/styled-components/vscode-styled-components
  - IntelliJ: https://plugins.jetbrains.com/plugin/9997-styled-components--styled-jsx/

## Starting app

- Start with `yarn start`
- Will auto re-direct to browser on port 3000 on your development machine.

## Contributing

- Fork project
- Make some changes.
- `yarn lint` to check your code for linting errors.
- `yarn test` to run the test suite.
- Pull latest changes from upstream (see: https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
- Submit a pull request. Wait for review and merge.
- Congratulations! You're a contributor.
- If you're interested in contributing regularly, let me know and I'll add you to the organization.

## Additional notes

- Git commit will run prettier, and eslint, to format code style appropriately

## Tech Stack

- Language: Typescript
- Framework: React
- Testing Framework: Jest + Enzyme + Cypress
- Components: Semantic UI React
- CSS: Styled Components

## Resources

- Semantic UI React
  - https://react.semantic-ui.com/
- Styled Components
  - https://styled-components.com/docs
- Typescript
  - Basic Docs: https://www.typescriptlang.org/docs/home.html
  - More advanced patterns/examples: https://basarat.gitbook.io/typescript/
- React:
  - Tutorial: https://reactjs.org/tutorial/tutorial.html
  - Hello world: https://reactjs.org/docs/hello-world.html
  - Thinking in React: https://facebook.github.io/react/docs/thinking-in-react.html
- Testing frameworks
    - Unit/Integration
      - Jest
        - Basic docs: https://jestjs.io/docs/en/getting-started
        - More advanced patterns/examples: https://jestjs.io/docs/en/snapshot-testing
      - Enzyme:
        - Shallow rendering: https://github.com/enzymejs/enzyme/blob/master/docs/api/shallow.md
        - Full DOM rendering: https://github.com/enzymejs/enzyme/blob/master/docs/api/mount.md
    - Functional/E2E
      - Cypress
        - Docs: https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Can-Be-Simple-Sometime

