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

const Users = {
    userslist : async () => {
    const {Client} = require('pg');
    const client = new Client({
        user: 'postgress',
        host: '127.0.0.1',
        database: 'postgres',
        password: '1',
        port: 5432
    });
    await client.connect();
    const res = await client.query('SELECT * from users');
    user = res.rows[0].user_name;
    console.log(user);
    await client.end();
    return user;
    //ctx.body = user;//await render('userlist', {'users': user });
}
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
    
};

module.exports.Users = Users;