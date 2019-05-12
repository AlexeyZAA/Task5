'use strict';
const views = require('co-views');
const parse = require('co-body');
//массив сообщений
const messages = [
  { id: 0,
    message: ''
  },
  { id: 1,
    message: ''
  }
];
const hellouser = '';
const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.home = function *home(ctx) {
  this.body = yield render('site', { 'messages': messages });
};