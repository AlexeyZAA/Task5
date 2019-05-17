'use strict';
const express = require("express");
const ex = express();
ex.set("view engine", "ejs");
//выполняем рендер шаблона с передачей параметров
const user = {
    message: 'Пользователи'
};

async function users(ctx) {
    await ctx.render('users', {user});
}
;

async function userlist(ctx) {
const {Client} = require('pg');
//параемтры подключения к базе надо вынести в модуль config
const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
    password: '1',
    port:5432
});
client.connect();
let r = await client.query('SELECT * from users');
let rr = r.rows;
client.end();
    ctx.body = JSON.stringify(rr);
};

module.exports.users = users;
module.exports.userlist = userlist;

