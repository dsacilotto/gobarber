<h1 align="center">
    GoBarber
</h1>

<h3 align="center">
  GoBarber is a barber shop schedule management
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/dsacilotto/gobarber?color=%2304b4d3">
</p>

## Technologies

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](http://docs.sequelizejs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [mongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Nodemailer](https://nodemailer.com/about/)

### Frontend

- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [React-Router](https://github.com/ReactTraining/react-router)

### Mobile

- [ReactJS](https://reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)

## Run

For the entire application to work correctly it is recommended that the following tools are installed at least in versions:

- NodeJS -> 10.16.3
- ReactJS -> 16.9.0
- React Native -> 0.60.5

### Backend

Create a database called `gobarber` in PostgreSQL

```bash
# After clone the project
$ cd gobarber/backend

# Install packages
$ yarn install

# Create a root .env file in the project containing the settings of Redis, PostgreSQL, etc.
# You can follow env.example as an example

# Creating DB tables
$ yarn sequelize db:migrate

# Running in dev mode
$ yarn dev
```

The application will be available at: _http://localhost:3333_

### Frontend

```bash
$ cd gobarber/frontend

# Install packages
$ yarn install

# Running in dev mode
$ yarn start
```

The application will automatically open in your default browser on: _http://localhost:3000_

### Mobile

_Note.: this app has not been tested on iOS device_

```bash
$ cd gobarber/mobile

# Install packages
$ yarn install

# Running Metro Bundler
$ yarn start

# and in another terminal in the project folder -> you need an Android device or emulador installed
$ yarn android
```

---

This is part of my [GoStack](https://rocketseat.com.br/bootcamp) training
