# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Guide on How to Deploy Angular on Heroku

1. Build your app to production
```bash
ng build --prod
```

2. Install express
```bash
npm install --save express
```

3. Create a server.js as ROOT DIRECTORY
```javascript
var express = require('express')

app = express()

app.use(express.static('./dist/< name in your package.json >'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/< name in your package.json >/' }
    );
});

app.listen(process.env.PORT || 8080, function () {
    console.log('Angular server is listening...');
});
```

4. Test by running locally
```bash
node server.js
```

5. Change start script in package.json
```json
//"start": "ng serve"
"start": "node server.js"
```

6. Create Heroku app
```bash
heroku create chatbot-data-collection-ui
```
