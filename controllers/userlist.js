/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
//подключаем модули
const views = require('co-views');
const parse = require('co-body');
const titleusers = 'Пользователи сайта';

//создаем  массив данных для теста
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
//определяем директорию видов для шаблонов
const render = views(__dirname + '/../views', {
    map: {html: 'swig'}
});

//функция по роутингу для вывода списка пользователей
module.exports.userlist = function *userlist(ctx) {
    //подключение к базе
    const {Pool} = require('pg');
    var config = {
        user: 'postgres',
        database: 'postgres',
        password: '1',
        host: '127.0.0.1',
        port: 5432,
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000
    };
    const pool = new Pool(config);
    //переменная для результ
    
    pool.on('error', function (err, client) {
        console.error('idle client error', err.message, err.stack);
    });
    var test = ['qqq','www'];
    var users;
    pool.query('SELECT user_name from users', function (err, res) {
        if (err) {
            return console.error('error running query', err);
        }
        var test = [];
        res.rows.forEach(function (elem, index, arr) {
            test[test.length] = elem.user_name;
        });
        users = test;
        //console.log(users);
    });
    
    console.log(users);
    this.body = yield render('userlist', {'userlistobject': userlistobject, 'titleusers': titleusers, 'users': test});

};

