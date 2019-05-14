'use strict';
//подключаем модули
const views = require('co-views');
const parse = require('co-body');
const {Client} = require('pg');
const client = new Client({
    user: 'root',
    host: '127.0.0.1',
    database: 'postgres',
    password: '1',
    port: 7777
});
async function userslist(ctx) {
        client.connect();
        let r = await client.query('SELECT * from users');
        ctx.body = r.rows;
        client.end();
    }
////определяем директорию видов для шаблонов
//const render = views(__dirname + '/../views', {
//    map: {html: 'swig'}
//});

module.exports.userslist = userslist;
