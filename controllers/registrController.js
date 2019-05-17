'use strict';
const express = require("express");

const ex= express();
ex.set("view engine", "ejs");
//выполняем рендер шаблона с передачей параметров
const user = {
  message: 'Регистрация'
};
//для рендера страницы
async function registr(ctx) {
  await ctx.render('registr', { user });
};
//для получения данных формы
async function registrForm(ctx) {
        await console.log(JSON.stringify(ctx));
        ctx.body = 'форма не пришла';
};

module.exports.registr = registr;
module.exports.registrForm = registrForm;
