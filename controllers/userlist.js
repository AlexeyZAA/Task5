/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
const views = require('co-views');
const parse = require('co-body');
const userlistobject = [
  { id: 0,
    titleusers: 'Пользователи',
    messageusers: 'Вы просматриваете всех зарегистрированных участников'
  },
];
const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.userlist = function *userlist(ctx) {
  this.body = yield render('userlist', { 'userlistobject': userlistobject });
};

