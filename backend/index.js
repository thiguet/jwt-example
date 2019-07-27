require("dotenv-safe").load();
const http = require('http');
const express = require('express')
const jwt_service = require('./src/Util/JWTService.js');
const RouteParser = require('./src/Util/RouteParser.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Register routes in other files.
let routeParser = new RouteParser(app);
routeParser.parseRoutes();

app.get('/users', jwt_service, function (req, res) {
  res.status(200).send({ treta: 'askdmasdm' });
});

let server = http.createServer(app);
server.listen(3004);
