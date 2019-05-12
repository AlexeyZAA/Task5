'use strict';
const site = require('./controllers/site');
const login = require('./controllers/login');
const registr = require('./controllers/registr');
const userlist = require('./controllers/userlist');
const koaapi = require('./controllers/koaapi');
const users = require('./models/users');

const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const Router = require('koa-router');
const convert = require('koa-convert');
const KoaBody = require('koa-body');

const koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = module.exports = new koa();

app.use(logger());

app.use(route.get('/', site.home));
app.use(route.get('/login', login.login));
app.use(route.get('/registr', registr.registr));
app.use(route.get('/api1', koaapi.api.api1));
app.use(route.get('/api2', koaapi.api.api2));
var test = userlist.users();
console.log(test);
app.use(route.get('/userlist', ''));  

app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
    app.listen(3000);
    console.log('Слушаем порт 3000');
}
