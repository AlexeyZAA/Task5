/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
const isJson = require('koa-is-json');
//const api = {
//    api2: function *api2(ctx) {
//        this.body = yield render('koaapi', {'apimessage1': JSON.stringify('apimessage2')});
//    },
//    userall: function *userall(ctx) {
//        pool.query('SELECT NOW()', (err, res) => {
//            this.test = JSON.stringify(res.rows[0].user_name);
//            console.log(res.rows[0].user_name);
//            pool.end();
//        });
//        this.body =  'is a ';
//    }
//};
let HelloObj = {'hello': 'Привет Ноде'};
let HelloArr = ['Иванов', 'Петров'];    
let api1 = async function api1(ctx) {
  ctx.body = await HelloObj;
}

let api2 = async function api2(ctx) {
  ctx.body = await HelloArr;
}

module.exports.api1 = api1;
module.exports.api2 = api2;