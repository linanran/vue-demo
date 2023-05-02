//引入路由插件
import Router from 'koa-router'
//创建路由对象
const router=new Router({
  //接口前缀
  prefix:'/city'
})
//路由案例返回结果
router.get('/list',async (ctx)=>{
  ctx.body= {
    list:['北京','天津']
  }
})

//异步请求数据代码部分



export default router

