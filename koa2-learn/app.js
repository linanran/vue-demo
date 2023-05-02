const Koa = require('koa')
const app = new Koa()
//以下都是中间件，引入没有顺序
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

//引入mongoose
const mongoose=require('mongoose')
//引入mongoose配置文件
const dbConfig=require('./dbs/config')


//使用自定义的中间件
const pv=require('./middleware/koa-pv')
//引入m1-3中间件
const m1=require('./middleware/m1')
const m2=require('./middleware/m2')
const m3=require('./middleware/m3')

//引入redis相关中间件
const session=require('koa-generic-session')
const Redis=require('koa-redis')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)
//使用redis设置session
app.keys=['keys','keyskeys']
app.use(session({
  //设置session名称
  key:'mt',
  perfix:'mtpr',
  store:new Redis()
}))

// 中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(m1())
app.use(m2())
app.use(m3())
app.use(pv())
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

//koa2 node服务与数据库连接 配置文件中的值
//userNewUrlParser？ 官网中未找到该选项
mongoose.connect(dbConfig.dbs,{
  useUnifiedTopology:true,
  useNewUrlParser:true
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
