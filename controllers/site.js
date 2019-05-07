'use strict';
const views = require('co-views');
const parse = require('co-body');
//массив сообщений
const messages = [
  { id: 0,
    message: 'Приветствуем вас наши посетители'
  },
  { id: 1,
    message: 'Описание приложения'
  }
];

const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.home = function *home(ctx) {
  this.body = yield render('site', { 'messages': messages });
};