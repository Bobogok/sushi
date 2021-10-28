const jsonServer = require('json-server');
const proxy = require('express-http-proxy');

const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});

server.use('/items', proxy('https://react-sushi-test.herokuapp.com'));
server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 3000);
