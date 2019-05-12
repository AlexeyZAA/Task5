
'use strict';
//подключаем модули
const views = require('co-views');
const parse = require('co-body');
const isJson = require('koa-is-json');

//определяем директорию видов для шаблонов
const render = views(__dirname + '/../views', {
    map: {html: 'swig'}
});


var users = async function (ctx) {
    const {Client} = require('pg');
    const client = new Client({
        user: 'root',
        host: '127.0.0.1',
        database: 'postgres',
        password: '1',
        port: 7777
    });
    var user;
    await client.connect();
    const res = await client.query('SELECT * from users');
    user = res.rows[0].user_name;
    console.log(user);
    await client.end();
    return user;
    //ctx.body = user;//await render('userlist', {'users': user });
}
module.exports.users = users;
//module.exports.answer = answer;
//module.exports.q = q;