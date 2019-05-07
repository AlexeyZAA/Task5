'use strict';
const site = require('./controllers/site');
const login = require('./controllers/login');
const registr = require('./controllers/registr');
const userlist = require('./controllers/userlist');

const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const views = require('koa-views');
const path = require('path');

const app = module.exports = koa();

//логгер
app.use(logger());

app.use(route.get('/', site.home));
app.use(route.get('/login', login.login));
app.use(route.get('/registr', registr.registr));
app.use(route.get('/userlist', userlist.userlist));

app.use(route.get('/messages', site.list));
app.use(route.get('/messages/:id', site.fetch));
app.use(route.post('/messages', site.create));
app.use(route.get('/async', site.delay));
app.use(route.get('/promise', site.promise));

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
  app.listen(3000);
  console.log('Слушаем порт 3000');
}
