'use strict';
const Vue = require('vue')
const app = new Vue({
    template: '<div>Hello World</div>'
});
const renderer = require('vue-server-renderer').createRenderer();
//шаблоны видов в папке вью
async function index(ctx) {
    renderer.renderToString(app).then(html => {
        ctx.body = html;
        ///console.log(html)
    }).catch(err => {
        console.error(err)
    });
}
module.exports.index = index;

////подключаем модули
//const views = require('co-views');
//const parse = require('co-body');
//const {Client} = require('pg');
////параемтры подключения к базе надо вынести в модуль config
//const client = new Client({
//    user: 'root',
//    host: '127.0.0.1',
//    database: 'postgres',
//    password: '1',
//    port: 7777
//});
////получаем данные из базы
//async function index(ctx) {
//        client.connect();
//        let r = await client.query('SELECT * from users');
//        ctx.body = r.rows;
//        client.end();
//    }
//
//module.exports.index = index;
////'use strict';
//const views = require('co-views');
//const parse = require('co-body');
////массив сообщений
//const messages = [
//  { id: 0,
//    message: ''
//  },
//  { id: 1,
//    message: ''
//  }
//];
//const hellouser = '';
//const render = views(__dirname + '/../views', {
//  map: { html: 'swig' }
//});
//
//module.exports.home = function *home(ctx) {
//  this.body = yield render('site', { 'messages': messages });
//};