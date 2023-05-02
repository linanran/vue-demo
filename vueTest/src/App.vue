<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-link to="/home">首页</router-link>
<!--    router-link的其他属性-->
    <router-link tag="a" active-class replace to="/about">关于</router-link>
<!--  router-view：链接点击后组件显示的位置-->
<!--    这里的拼接方式有些陌生，需要记住-->
    <router-link :to="'/user/'+username">用户</router-link>
<!--    <HelloWorld></HelloWorld>-->
    <router-link :to="{path:'/profile',query:{name:'an'}}">档案：路由数据传递</router-link>
   <keep-alive><router-view/></keep-alive>

  </div>
</template>
<!--根组件-->
<script>
import HelloWorld from "./components/HelloWorld"
export default {
  name: 'App',
  components:{
    HelloWorld
  },
  data(){
    return {
      username:"lisi"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
