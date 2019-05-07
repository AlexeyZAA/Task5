'use strict';
const site = require('./controllers/site');
const login = require('./controllers/login');
const registr = require('./controllers/registr');
const userlist = require('./controllers/userlist');
//аутентификация
const auth = require('koa-basic-auth');



const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const views = require('koa-views');
const path = require('path');

const app = module.exports = koa();

app.use(logger());
var credentials = {name: 'Ayush', pass: 'India'};
app.use(function * (next) {
    try {
        yield next;
    } catch (err) {
        if (401 == err.status) {
            this.status = 401;
            this.set('WWW-Authenticate', 'Basic');
            this.body = 'You have no access here';
        } else {
            throw err;
        }
    }
});

app.use(route.get('/protected', auth(credentials), function *(){
   this.body = 'You have access to the protected area.';
   yield next;
}));

// No authentication middleware present here.
route.get('/unprotected', function*(next){
   this.body = "Anyone can access this area";
   yield next;
});

app.use(route.get('/', site.home));
app.use(route.get('/login', login.login));
app.use(route.get('/registr', registr.registr));
app.use(route.get('/userlist', userlist.userlist));

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

if (!module.parent) {
    app.listen(3000);
    console.log('Слушаем порт 3000');
}
