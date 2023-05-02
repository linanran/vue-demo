<template>
<div>
  我是用户页面
  获取到的用户名：{{$route.params.username}}
  $route:当前活跃中的路由 <br>
  $router:当前的全局路由 <br>
  param.username:这里的username是在路由配置文件冒号后面的字符串
<!--  {{someTime}}-->
</div>
</template>

<script>
export default {
  name: "User",
  data(){
    return{
      someTime:this.$route.params.username
    }
  }
}
</script>

<style scoped>

</style>
