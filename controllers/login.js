/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
const views = require('co-views');
const parse = require('co-body');
const loginobject = [
  { id: 0,
    titlelogin: 'Залогинься',
    messagelogin: 'Войдите в систему'
  },
];
const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.login = function *login(ctx) {
  this.body = yield render('login', { 'loginobject': loginobject });
};

