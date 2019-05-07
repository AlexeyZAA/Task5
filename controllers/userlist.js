/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
const views = require('co-views');
const parse = require('co-body');
const titleusers = 'Пользователи сайта';
const userlistobject = [
    {
        id: 0,
        username: 'Иванов Иван Иванович'
    },
    {
        id: 1,
        username: 'Петров Петр Петрович'
    },
    {
        id: 1,
        username: 'Сидоров Сидр Сидорович'
    }
];
const render = views(__dirname + '/../views', {
    map: {html: 'swig'}
});

module.exports.userlist = function *userlist(ctx) {
    //подключение к базе
    const {Pool} = require('pg');
    var config = {
        user: 'root',
        database: 'postgres',
        password: '1',
        host: '127.0.0.1',
        port: 7777,
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000
    };
    const pool = new Pool(config);
    var users = new Array();
    var usersobj
    pool.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack);
    });
    pool.query('SELECT user_name from users', function (err, res) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log('ФИО:', res.rows[1].user_name); //res.rows[1].user_name);
        res.rows.forEach(function (elem, index, arr) {
            users[users.length] = elem.user_name;//.user_name;
            console.log(elem.user_name);
        });
        console.log(users[2]);
    });
    this.body = yield render('userlist', {'userlistobject': userlistobject, 'titleusers': titleusers, 'users': users[2]});

};

