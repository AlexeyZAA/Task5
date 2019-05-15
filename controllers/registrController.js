'use strict';
const express = require("express");
const ex= express();
ex.set("view engine", "ejs");
//выполняем рендер шаблона с передачей параметров
const user = {
  message: 'Регистрация'
};
async function registr(ctx) {
  await ctx.render('login', { user });
};
module.exports.registr = registr;
