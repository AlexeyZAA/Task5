const Koa = require('koa');
const site = require('./controllers/siteController');
const login = require('./controllers/loginController');
const registr = require('./controllers/registrController');
const koaapi = require('./controllers/koaApi');
const users = require('./controllers/usersController');
const Router = require('koa-router');
const route = require('koa-route');
const router = new Router();
const static = require('koa-static');
const views = require('koa-views');
const path = require('path');
const Vue = require('vue');
const ex = require('express')();
const bodyParser = require('body-parser');
const koaBody = require('koa-body');
const app = module.exports = new Koa();

app.use(static(path.join(__dirname, 'public')));
app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));

//определяем маршруты
router.get('/', site.index);
router.get('/login', login.login);
router.get('/registr', registr.registr);
router.post('/registrform', koaBody({ multipart: true }), registr.registrForm);

router.get('/api1', koaapi.Api.api1);
router.get('/api2', koaapi.Api.api2);
router.get('/api3/:parone/:partwo', koaapi.Api.api3);
router.get('/users', users.users);
router.get('/userlist', users.userlist);
//*закончили определять
//подключаем маршруты к приложению
app.use(router.routes());

//слушаем приложение на порту
app.listen(3000, function(){
   console.log('Слушаем https://localhost:3000');
});

