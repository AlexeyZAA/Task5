'use strict';
const express = require("express");
const ex= express();
ex.set("view engine", "ejs");
//выполняем рендер шаблона с передачей параметров
const user = {
  message: 'Добро пожаловать на сайт разработчиков JS'
};
async function index(ctx) {
  await ctx.render('site', { user });
};
module.exports.index = index;