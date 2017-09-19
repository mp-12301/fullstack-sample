# fullstack-sample

A fullstack sample implemented in Node + React. Fetches repos from an username on github and displays them on the page. A live demo has been deployed [here](https://fullstack-sample.herokuapp.com/).

## Installation

```
git clone --depth 1 https://github.com/mpereira96/fullstack-sample.git project
cd project
cp .env-example .env
npm install or yarn install
```

## Usage

```
npm start                   # start server
npm run start:dashboard     # start server using webpack-dashboard
npm run build               # production build (remember to build with NODE_ENV=production)
npm test                    # starts tests
```

You can check the app on dev mode by running `npm start` on your machine and going to http://localhost:8080 (default)
