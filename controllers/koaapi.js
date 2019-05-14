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