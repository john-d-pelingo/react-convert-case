# react-convert-case

Convert strings between cases. Built with react, redux and friends. Bootstrapped with the help of Facebook's create-react-app.                     

Try the demo at [https://john-d-pelingo.github.io/react-convert-case/](https://john-d-pelingo.github.io/react-convert-case/).

## Application Stack

- [x] create-react-app
- [x] prop-types
- [x] react
- [x] react-dom
- [x] react-redux
- [x] redux
- [x] redux-form
- [x] redux-thunk
- [x] redux-undo
- [x] redux-devtools-extension for Chrome
- [x] reselect

## Development Stack

- [x] cross-env
- [x] del-cli
- [x] eslint
- [x] gh-pages
- [x] node-sass
- [x] npm-run-all

## Test Stack 

- [x] enzyme
- [x] jest

## Utilities

- [x] [change-case](https://github.com/blakeembrey/change-case)
- [x] [copy-to-clipboard](https://github.com/sudodoki/copy-to-clipboard)
- [x] [diff](https://github.com/kpdecker/jsdiff)
- [x] [shortid](https://github.com/dylang/shortid)

Alongside pure and vanilla JavaScript.

## Installation

Clone the repository:

```sh
$ git clone https://github.com/john-d-pelingo/react-convert-case && cd react-convert-case
```

Install npm dependencies:

```sh
$ npm install
```

## Available Scripts

Taken from the official create-react-app [docs](https://github.com/facebookincubator/create-react-app#getting-started).

In the project directory, you can run:

```sh
$ npm start
````

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

```sh
$ npm test
````

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests) 
for more information.

```sh
$ npm run build
````

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) 
for more information.

```sh
$ npm run eject
````

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build 
dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have 
full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this 
point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this 
feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request! :D

## TODO 

- [x] Enable tab character insertion inside textarea. 
- [x] Add clear text.
- [x] Add reset text.
- [ ] Add save data to and load from `localStorage` or browser cookies. 
- [ ] Add download text capability.
- [ ] Add shortcuts for:
  - [ ] Clear
  - [ ] Copy
  - [ ] Redo
  - [ ] Reset
  - [ ] Undo
- [ ] Complete tests.
  - [ ] Redux
  - [ ] Containers
  - [ ] Components
- [ ] Wait for this [issue](https://github.com/erikras/redux-form/issues/860) to be solved.

## License

[MIT](https://github.com/john-d-pelingo/react-convert-case/blob/master/LICENSE) &copy; 2017-present
