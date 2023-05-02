/*
中间件
 */
//ctx:app中的全局信息，包含request与response
function  m1(ctx){
    global.console.log(" m1:",ctx.path)
    global.console.log(" m1运行成功！")
}
//导出一个函数，因为在使用中间件的时候用的是use(f())的形式，因此导出返回也是一个函数
//返回一个异步函数
module.exports=function(){
    return async function(ctx,next){
        global.console.log("m1 start")
        //执行中间件
         m1(ctx)
        //执行完当前中间件后交给下一个中间件处理
        await next()
        global.console.log("m1 end")
    }
}