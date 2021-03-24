# soapbox-challenge

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer. To check if they are installed, type the line following the '$' into your terminal.

* [Git](https://git-scm.com/) - $ git version
* [Node.js](https://nodejs.org/) (with npm) - $ node -v   $ npm -v
* [Ember CLI](https://ember-cli.com/) - $ ember -v
* [Google Chrome](https://google.com/chrome/) - if on MACOS $ /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --version

Depending on your IDE or text editor used, you may need to install some extensions to properly run the project. I am using Visual Studio Code and using the following extensions. 

* Ember JS (ES6) and Handlebars code snippets, created by Phani Teja Komaravolu
* Ember Snippets, created by exelord;

You will need to create an account with GIPHY api at 'https://developers.giphy.com/' and obtain an api key for app development. You will then need to type this file path into your '.gitignore' file: 'app/data/keys.js' so your api key will not be tracked by git. After that is complete you can now create '/app/data/keys.js'. Check by typing 'git status' in the console to make sure 'app/data/keys.js' is not being tracked. When you are successful you can then copy and paste the following into your keys.js file: 'export const api = {key: 'API_KEY_HERE'};' replace 'API_KEY_HERE' with your api key.

## Installation

* `git clone <repository-url>` this repository
* `cd soapbox-challenge`
* `npm install`

## Running / Development

* Any of these will run the app from the cmd line: `npm start` or `ember serve` or `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
