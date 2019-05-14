'use strict';
//подключаем модули
const views = require('co-views');
const parse = require('co-body');
const {Client} = require('pg');
//параемтры подключения к базе надо вынести в модуль config
const client = new Client({
    user: 'root',
    host: '127.0.0.1',
    database: 'postgres',
    password: '1',
    port: 7777
});
//получаем данные из базы
async function userslist(ctx) {
        client.connect();
        let r = await client.query('SELECT * from users');
        ctx.body = r.rows;
        client.end();
    }

module.exports.userslist = userslist;
