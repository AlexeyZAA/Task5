'use strict';
const express = require("express");
const crypto = require('crypto');
const pbkdf2 = require('pbkdf2');
const ex = express();
ex.set("view engine", "ejs");
//выполняем рендер шаблона с передачей параметров
const user = {
    message: 'Учетные данные'
};
async function login(ctx) {
    await ctx.render('login', {user});
}
;
async function loginForm(ctx, next) {
    let res = JSON.parse(ctx.request.body);
    let login = res[0].login;
    let passS = res[0].pass;
    let pass = crypto.createHash('sha256').update(passS).digest('base64');
    const {Client} = require('pg');
//параемтры подключения к базе надо вынести в модуль config
    const client = new Client({
        user: 'root',
        host: '127.0.0.1',
        database: 'postgres',
        password: '1',
        port: 7777
    });
    client.connect();
    let resp;
    let log = await client.query('SELECT * from users where user_name = $1', [login]);
    if (log.rowCount > 0) {
        let pass_bd = log.rows[0].user_pass;
        if (pass === pass_bd.toString()) {
            resp = 'Пользователь указан верно, дальше проходит авторизация на сайте';
            //console.log(pass.toString() + '-'+ pass_bd.toString());
        } else {
            resp = 'Неверно указан логин или пароль';
            //.log(resp);
        }
    } else {
        resp = 'Неверно указан логин или пароль';
    }
    ctx.body = resp;
}
module.exports.login = login;
module.exports.loginForm = loginForm;