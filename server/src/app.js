const Koa = require('koa');
const app = new Koa();
const onerror = require('koa-onerror');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-generic-session');
const koaRedis = require('koa-redis');
const path = require('path')

const { sessionInfo, cookieInfo } = require('./config/config');
const { REDIS_CONFIG } = require('./config/db_config');

const homeRouter = require('./routes/home');
const adminRouter = require('./routes/admin');

// 错误抛出 error handler
onerror(app);

// 中间件处理 middleware
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(`${__dirname}/src/public`));
app.use(require('koa-views')(`${__dirname}/views`, {
  extension: 'ejs'
}));
app.keys = sessionInfo.keys;//koa-session加密cookie密钥
app.use(session({// 处理session
  key: sessionInfo.name,// cookie name
  prefix: sessionInfo.prefix,// redis key的前缀
  cookie: cookieInfo,
  store: koaRedis(REDIS_CONFIG)//配置存储方式为redis
}));


// 日志logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log('>>>>>> Server logger', `${ctx.method}${ctx.url}-${ms}ms`);
});

// routes 路由注册
// allowedMethods用于当客户端请求接口使用错误的方法时返回405,即请求方法不匹配
app.use(homeRouter.routes(), homeRouter.allowedMethods())
app.use(adminRouter.routes(), adminRouter.allowedMethods())

// error-handling 对错误进行操作
app.on('error', (err, ctx) => {
  console.log('>>>>> Server error', err, ctx);
})

module.exports = app;