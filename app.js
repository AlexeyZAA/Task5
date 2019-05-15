const Koa = require('koa');
const site = require('./controllers/siteController');
const login = require('./controllers/login');
const registr = require('./controllers/registr');
const koaapi = require('./controllers/koaApi');
const users = require('./controllers/usersController');
const Router = require('koa-router');
const router = new Router();

const serve = require('koa-static');
const views = require('koa-views');
const path = require('path');

const app = new Koa();
//определяем маршруты
router.get('/', site.index);
router.get('/login', login.login);
router.get('/registr', registr.registr)
router.get('/api1', koaapi.Api.api1);
router.get('/api2', koaapi.Api.api2);
router.get('/api3/:parone/:partwo', koaapi.Api.api3);
router.get('/users', users.userslist);
//*закончили определять
//подключаем маршруты к приложению
app.use(router.routes());
//определяем публичные файлы
//app.use('/public', express.static(__dirname + '/client'));
//app.use(serve(path.join(__dirname, 'public')));
//слушаем приложение на порту
app.listen(3000, function(){
   console.log('Слушаем https://localhost:3000')
});

