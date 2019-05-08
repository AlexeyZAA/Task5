/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
//подключаем модули
const views = require('co-views');
const parse = require('co-body');
const titlereg = 'Страница регистрации';
const messagereg = 'Вам необходимо зарегистрироваться на сайте';
//определяем директорию видов для шаблонов
const render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});
//рендерим вид логин передаем ему данные
module.exports.registr = function *registr(ctx) {
  this.body = yield render('registr', { 'titlereg': titlereg , 'messagereg': messagereg });
};

