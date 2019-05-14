/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
const isJson = require('koa-is-json');

let HelloObj = {'hello': 'Привет Ноде'};
let HelloArr = ['Иванов', 'Петров'];
//объект с функциями АПИ возвращающими разные данные
const Api = {
    api1: async function api1(ctx) {
        ctx.body = await HelloObj;
    },
    api2: async function api2(ctx) {
        ctx.body = await HelloArr;
    },
    api3: async function api3(ctx) {
        ctx.body = await ctx.params;
    }
}

module.exports.Api = Api;