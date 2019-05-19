'use strict';
const express = require("express");
const url = require('url');
const crypto = require('crypto');
const ex = express();
ex.set("view engine", "ejs");
//выполняем рендер шаблона с передачей параметров
const user = {
    message: 'Регистрация'
};
//для рендера страницы
async function registr(ctx) {
    await ctx.render('registr', {user});
}
;
//для получения данных формы
async function registrForm(ctx, next) {
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
        console.log('Уже есть');
        resp = 'Уже есть в базе';
    } else {
        console.log('Еще нет');
        let queryText = 'INSERT INTO users(user_name, user_pass) VALUES($1, $2)';
        client.query(queryText, [login, pass.toString('Hex')], function (err, result) {
            if (err) {
                console.log(err + ' - Данные не добавлены');
                return;
            }
        });
        resp = 'Юзер зареган';
    }
    ctx.body = resp;
}
module.exports.registr = registr;
module.exports.registrForm = registrForm;
