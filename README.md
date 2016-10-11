# react-native-barebones

Basic setup for React Native project.

### Requirements:
- Node v6.x
- npm v3.x

### Includes
- eslint
- flow
- jest
- enzyme
- react-test-renderer
- react-native-router-flux
- redux

Unit tests with `jest` and `enzyme`. Snapshot tests with `react-test-renderer`. Routing with `react-native-router-flux`. Type checking with `flow`. Lint with `eslint`.

### Project structure
```
src
├── actions
│   ├── __tests__
│   │   └── foo.test.js
│   ├── foo.js
│   └── types.js
├── components
│   ├── __tests__
│   │   └── foo.test.js
│   └── Foo.js
├── reducers
│   ├── __tests__
│   │   └── foo.test.js
│   ├── foo.js
│   └── index.js
├── router
│   ├── foo.js
│   └── index.js
├── screens
│   ├── __tests__
│   │   ├── __snapshots__
│   │   │   └── foo.test.js.snap
│   │   └── foo.test.js
│   └── Foo.js
└── utils
│   └── bar.js
└── index.js
```
