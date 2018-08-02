# create-jqwidgets-react-app
Please refer to its documentation:
  - [Getting Started](https://github.com/jqwidgets/create-jqwidgets-react-app/blob/master/README.md#getting-started) 
  - [jQWidgets React Documentation](http://www.jqwidgets.com/reactjs-components-documentation/)

This project is based on [create-react-app](https://github.com/facebookincubator/create-react-app).

## Quick Overview
```sh
npm i -g create-jqwidgets-react-app 

create-jqwidgets-react-app my-app
cd my-app
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

## Getting Started

### Installation

Install it once globally:

```sh
npm install -g create-jqwidgets-react-app
```

**Make sure you have the latest version of [Node](https://nodejs.org/en/) on your machine**.

### Creating an App

```sh
create-jqwidgets-react-app my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── node_modules
├── public
├── src
├── package.json
├── README.md
```

Subfolders are not shown in order to keep it short.<br>
Once the installation is done, you can run some commands inside the project folder:

### `npm start`
Builds the app in development mode and starts a web server. <br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. <br />
The page will reload if you make edits.

### `npm run build`
Builds the app in production mode and stores it in the `build/` directory. <br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. <br />
By default, it also includes a service worker so that your app loads from local cache on future visits.

Your app is ready to be deployed.

## Why Use This?

**If you’re getting started** with `jQWidgets` and `React`, using `create-jqwidgets-react-app` is the easiest way to do this.  <br />
Just install, run and you will see an React jQWidgets Grid on your page. <br />
Then you can customize the project as much as you want, making something great.
