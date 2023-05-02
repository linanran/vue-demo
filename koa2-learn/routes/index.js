const router = require('koa-router')()
//路由，页面入口文件
router.get('/', async (ctx, next) => {
  //没有window对象，global对象相当于window
  global.console.log('index'),
      //设置cookie
  ctx.cookies.set('pvid',Math.random())
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
    //读取session
    cookie:ctx.cookies.get('pvid')
  }
})

router.get('/testAsync',async(ctx)=>{
  global.console.log('start',new Date().getTime())
  //创建一个Promise异步操作赋值给变量doSomeThing，并且设置await，表示此操作结束后再向下执行
  const doSomeThing= await new Promise((resolve,reject)=>{
    setTimeout(function() {
      global.console.log('async a', new Date().getTime())
      //返回数据
      resolve('执行完了')
    },1000);
    })
  //在页面显示doSomeThing异步函数的返回值
    ctx.body={doSomeThing}
/*
  1，await后面跟的是promise对象
  2，使用await 等待await后的异步操作完成后再向下执行
 */
})
module.exports = router
