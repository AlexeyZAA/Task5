'use strict';
//подключаем модули
//получаем данные из базы
async function layout (req, res){
  res.render('layout', { title: 'ejs' });
};

//async function index(ctx) {
//        client.connect();
//        let r = await client.query('SELECT * from users');
//        ctx.body = r.rows;
//        client.end();
//    }

module.exports.layout = layout;
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