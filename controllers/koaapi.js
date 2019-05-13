/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
//подключаем модули
const views = require('co-views');
const parse = require('co-body');
const isJson = require('koa-is-json');
//Работа с базой данных

var config = {
    user: 'root',
    database: 'postgres',
    password: '1',
    host: '127.0.0.1',
    port: 7777,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
};

//определяем директорию видов для шаблонов
const render = views(__dirname + '/../views', {
    map: {html: 'swig'}
});
var test;
//функции АПИ
const {Pool, Client} = require('pg');
var pool = new Pool({
    user: 'root',
    host: '127.0.0.1',
    database: 'postgres',
    password: '1',
    port: 7777
});

const api = {
    getAll: function *getAll(){
        return 'query(`SELECT * from ${tableName}`)';
    },
    api2: function *api2(ctx) {
        this.body = yield render('koaapi', {'apimessage1': JSON.stringify('apimessage2')});
    },
    userall: function *userall(ctx) {
        pool.query('SELECT NOW()', (err, res) => {
            this.test = JSON.stringify(res.rows[0].user_name);
            console.log(res.rows[0].user_name);
            pool.end();
        });
        this.body =  'is a ';
        //render('userlist', {'users': JSON.stringify(apimessage2)});
    }
};

module.exports.api = api;