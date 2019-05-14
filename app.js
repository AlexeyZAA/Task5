const Koa = require('koa');
const site = require('./controllers/site');
const login = require('./controllers/login');
const registr = require('./controllers/registr');
const koaapi = require('./controllers/koaapi');
const router = require('koa-router')();
const app = new Koa();
//определяем маршруты
router.get('/', site.home);
router.get('/login', login.login);
router.get('/registr', registr.registr)
router.get('/api1', koaapi.api.api1);
router.get('/api2', koaapi.api.api2);
router.get('/api3/:parone/:partwo', koaapi.api.api3);
//*закончили определять
//подключаем маршруты к приложению
app.use(router.routes());
app.listen(3000);

