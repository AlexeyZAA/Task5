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
    const User = {
    data() {
        return {
            tableData: [{
                    user_id: '1',
                    user_name: 'Ivanov'
                }, {
                    user_id: '2',
                    user_name: 'Petrov'
                }]
        }
    }
}
let tableData = [{
                    user_id: '1',
                    user_name: 'Ivanov'
                }, {
                    user_id: '2',
                    user_name: 'Petrov'
                }];
    ctx.body = tableData;
};

module.exports.users = users;
module.exports.userlist = userlist;

////подключаем модули
//const views = require('co-views');
//const parse = require('co-body');
//const {Client} = require('pg');
////параемтры подключения к базе надо вынести в модуль config
//const client = new Client({
//    user: 'postgres',
//    host: '127.0.0.1',
//    database: 'postgres',
//    password: '1',
//    port: 5432
//});
////получаем данные из базы
//async function users(ctx) {
//        client.connect();
//        let r = await client.query('SELECT * from users');
//        ctx.body = r.rows;
//        client.end();
//    }
//
//module.exports.users = users;
