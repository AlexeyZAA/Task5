/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
const views = require('co-views');
const parse = require('co-body');
const registrobject = [
  { id: 0,
    titleregistr: 'Регистрация',
    messageregistr: 'Для того чтобы посмотреть пользователей необходима регистрация'
  },
];
const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.registr = function *registr(ctx) {
  this.body = yield render('registr', { 'registrobject': registrobject });
};

