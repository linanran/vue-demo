const router = require('koa-router')()
const Redis=require('koa-redis')
//1，引入模型 schema为表的描述，模型为表的数据库操作
const Person = require('../dbs/models/person')

const Store= new Redis().client
//接口的前缀
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
//新增接口 ，从数据库中获取数据
router.post('/addPerson',async function(ctx){
    //给model新增一个实例
  const person=new Person({name:ctx.request.body.name, age:ctx.request.body.age})
    //结果状态标志
    let code
    try{
        await person.save()
        //成功code为0
        code=0
    } catch (e) {
        code=-1
    } finally {

    }
//返回code，存储结果值
    ctx.body={
      code:code
    }
})
//查询接口
router.post('/getPerson',async function(ctx){
    //查询某一个
    const result=await Person.findOne({name:ctx.request.body.name})
    //查询数据的集合
    const results=await Person.find({name:ctx.request.body.name})
    //返回 结果状态、单个结果、结果集合
    ctx.body={
        code:0,
        result,
        results
    }
})
//修改接口
router.post('/updatePerson',async function(ctx){
    const result=await Person.where({
        name:ctx.request.body.name
    }).update({
        age:ctx.request.body.age
    })
    ctx.body={
        code:0,
        result
    }
})
//删除接口
router.post('/deletePerson',async function(ctx){
    const result=await Person.where({
        name:ctx.request.body.name
    }).remove()
    ctx.body={
        code:0,
        result
    }
})
//直接操作redis接口
router.get('/fix',async  function(ctx){
    const st= await Store.hset('fix','name',Math.random())
    ctx.body={
        code:0
    }
})

module.exports = router
