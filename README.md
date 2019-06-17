# NYTimesArticles

NY Times Most Popular Articles - React Native App

## Documentation

[NY Times API Documentation](https://developer.nytimes.com/docs/most-popular-product/1/overview)

## Description

Build a simple app with React Native to hit the NY Times Most Popular Articles API and show a list of articles, that shows details when items on the list are tapped (a typical master/ detail app).

## Screenshots

## iOS

![HomeScreen](https://raw.githubusercontent.com/LexIliev/NYTimesArticles/master/screenshots/home-screen-ios.png 'Home Screen iOS')
![DetailsScreen](https://raw.githubusercontent.com/LexIliev/NYTimesArticles/master/screenshots/details-screen-ios.png 'Details Page iOS')

## Android

![HomeScreen](https://raw.githubusercontent.com/LexIliev/NYTimesArticles/master/screenshots/home-screen-android.png 'Home Screen Android')
![DetailsScreen](https://raw.githubusercontent.com/LexIliev/NYTimesArticles/master/screenshots/details-screen-android.png 'Details Page Android')

## Installation

Use _yarn_ or _npm_ to install the dependencies inside the root directory.

```bash
yarn
```

```bash
npm install
```

## Usage

Follow the instructions here to create an account, in order to generate an API Key:

[NY Times API - Get Started](https://developer.nytimes.com/get-started)

Paste the generated API Key inside `api.js`: `API_KEY='your-api-key'`

To start the app:

Run:

_For iOS_

```bash
react-native run-ios
```

It will automatically build the app, run the _Metro Bundler_ and open an iOS Simulator.

_For Android_

_Note:_
Make sure that you've started an Android Emulator before running the command below!

```bash
react-native run-android
```

It will automatically build the app, run the _Metro Bundler_ and connect the app with the emulator.

## Test the app

Run the following commands to run the unit tests and generate coverage reports:

```bash
npm run test
```

To update the snapshots, run:

```bash
npm run test -- -u
```

To generate test coverage reports, run:

```bash
npm run test:coverage
```

![Tests Coverage Report](https://raw.githubusercontent.com/LexIliev/NYTimesArticles/master/screenshots/tests-coverage-report.png 'Tests Coverage Report')

## License

[MIT](https://github.com/LexIliev/ny-times-articles/blob/master/LICENSE)
