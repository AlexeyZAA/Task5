'use strict';
const Vue = require('vue');
//даем Vue шаблон
const vue = new Vue({
    //указываем шаблон
    template: require('fs').readFileSync('./views/site.template.html', 'utf-8'),
    //готовим данные для атрибутов
    data: {
      title: 'context.url',
      logoname: 'Приложение Koa.js',
      titlemessage: 'Поиск истины и правильных  подходов к разработке',
      message: 'Приветствие начинающим изучение JS  Vue, Koa, Node и т.д'
    }
});
const renderer = require('vue-server-renderer').createRenderer();

//выполняем рендер шаблона с передачей параметров
async function index(ctx) {
    //рендерим шаблон
    await renderer.renderToString(vue, (err, html) => {//).then(html => { 
        ctx.render('layout', {title: 'asdadsasd'});
    });
}
module.exports.index = index;