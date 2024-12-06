# CloudCorp's "Movies" Service
Hi! Welcome to cloud corp. You should have received information about
what we want you to build seperately. This README will just cover how
to run the project skeleton that we have provided.

If you have any problems that aren't covered in this README then please
contact your recruitment coordinator who will be happy to help you out!

## Getting started

If you have a recent version of Node.js installed you should be
able to start the project in development mode by running the following
command in your terminal - in the same directory as this README.

`npm install && npm run start `

The application will launch at
[http://localhost:3000](http://localhost:3000) and will auto-reload
as you save files.

#### If you don't have node installed
If you don't already have node installed please visit the [Node.js](https://nodejs.org/en/)
website and follow the instructions there to download and install
an up to date version of node.

### TypeScript

If you would prefer to develop in TypeScript you are welcome to do so. Do not
feel obliged to do so, as doing so is not a requirement and will not
impact our assessment of your work.

To use TypeScript in this project, run

`npm install typescript`

Then change the extensions of any files where you would like to use TypeScript
to `.ts` or `.tsx`.

After following these two steps you should be able to run the project as
described earlier.

### Project Structure

This project is a basic [react](https://reactjs.org/) application.
The directory layout looks like:

```
/                -- repo root
|
|- src/          -- The code base. Most of the changes you make should be here
|  |- index.js   -- The application entry point
|  |- App.js     -- The basic example application
|
|- public/       -- public assets that are used in the build
|  \- index.html
|
```

## Available Scripts

In the project directory, you can run:

### `npm run start start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the
browser.

The page will reload if you make edits. You will also see any lint
errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode. See the
section about [running
tests](https://facebook.github.io/create-react-app/docs/running-tests) for
more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly
bundles React in production mode and optimizes the build for the
best performance.

The build is minified and the filenames include the hashes. Your
app is ready to be deployed!

## License

Copyright (C) 2021 Contentful GmbH. Please do not redistribute. We
use this project for interviews / hiring. Thanks.
