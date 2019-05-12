/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
const {Pool, Client} = require('pg');
const views = require('co-views');
const render = views(__dirname + '/../views', {
    map: {html: 'swig'}
});
//var pool = new Pool({
//    user: 'root',
//    host: '127.0.0.1',
//    database: 'postgres',
//    password: '1',
//    port: 7777
//});
const client = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'postgres',
    password: '1',
    port: 7777
});
//const userlist = {
//    userall: function *userall(ctx) {
//            client.connect();
//            client.query('SELECT * from users', (err, res) => {
//            console.log(JSON.stringify(res));   
//                //console.log(res.fields.map(function(f) { return f.name; }).join(', '));
//                //r = JSON.stringify(res);
//                //console.log(JSON.stringify(res.rows));
//                //console.log(r);
//
//                //render('userlist', {'users': JSON.stringify(res)});
//                //client.end();
//            });
//        //console.log(JSON.stringify(this.list));
//        //return 'sssssss';
//    }
//}
var q;
var users = function () {
    client.connect();
    client.query('SELECT * from users', (err, res) => {
        console.log(JSON.stringify(res[0]));
        if (err)
            throw err;
        q = JSON.stringify(res[0]);
    });
};

//module.exports.userlist = userlist;
module.exports.q = q;
module.exports.users = users;