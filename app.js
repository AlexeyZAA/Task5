const Koa = require('koa');
const site = require('./controllers/site');
const login = require('./controllers/login');
const registr = require('./controllers/registr');
const koaapi = require('./controllers/koaApi');
const users = require('./controllers/usersController');
const router = require('koa-router')();
const app = new Koa();
//определяем маршруты
router.get('/', site.home);
router.get('/login', login.login);
router.get('/registr', registr.registr)
router.get('/api1', koaapi.Api.api1);
router.get('/api2', koaapi.Api.api2);
router.get('/api3/:parone/:partwo', koaapi.Api.api3);
router.get('/users', users.userslist);
//*закончили определять
//подключаем маршруты к приложению
app.use(router.routes());
app.listen(3000, function(){
   console.log('Слушаем https://localhost:3000')
});

