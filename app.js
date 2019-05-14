//const site = require('./controllers/site');
//const login = require('./controllers/login');
//const registr = require('./controllers/registr');

//const users = require('./models/users');
//const userlist = require('./controllers/userlist');
//router.get('/api', function (ctx, next) {
//    console.log('ssss');
//    this.body =`<h1>Hello!</h1>`;
//});

//app.use(router.routes());
//app.use(router.allowedMethods());
//app.use(route.get('/', site.home));
//app.use(route.get('/login', login.login));
//app.use(route.get('/registr', registr.registr));
//app.use(route.get('/api2', koaapi.api.api2));
//app.use(compress());
const Koa = require('koa');
const koaapi = require('./controllers/koaapi');
const router = require('koa-router')();
const app = new Koa();

router.get('/api', api);
app.use(router.routes());
// response в таком виде работает
//app.use(ctx => {
//  ctx.body = 'Hello Koa';
//});
async function api(ctx) {
  ctx.body = 'Hello Koa';
}


app.listen(3000);

