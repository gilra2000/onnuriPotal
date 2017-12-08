const fs = require('fs');
const path = require('path');
const render = require('./render').default; // ES6 형식으로 만들어진 모듈이므로, 뒤에 .default 를 붙여주어야합니다.
var serialize = require('serialize-javascript');

// html 내용을 해당 상수에 저장합니다
const template = fs.readFileSync(path.join(__dirname, '../../build/index.html'), { encoding: 'utf8'});

module.exports = async (ctx) => {
    console.log("==============================================");
    console.log("==============================================");

    console.log("????????")

    console.log("==============================================");
    console.log("==============================================");
    const location = ctx.path;
    const { html, state, helmet } = await render(location);

    const page = template.replace('<div id="root"></div>', `<div id="root">${html}</div><script>window.__PRELOADED_STATE__=${serialize(state)}</script>`)
                          .replace('<meta helmet>', `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`);

    ctx.body = page;
}