# Reversi
A simple reversi game using HTML5 canvas.

## Development

This project is using gulp to run automated build. Just run:

```
$ gulp
```

And a local server will start running and you can preview the project in your browser at http://localhost:3000.

## Run Tests

You can write tests inside the test folder. The tests are running using Karma with Mocha/Chai. In order
to run the tests:

```
$ karma start
```

## Deploy/Build

The main difference between development and build, is that the test will be ran once before the
build, and also the final code will be minified and no source map will be generated.

```
$ gulp production
```

You can find the compiled files in `build` folder.