<template>
<div>
  我是首页 哈哈哈
  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">消息</router-link>

  <router-view/>
</div>
</template>

<script>
export default {
  name: "Home",
  //生命周期钩子,模版对象被创建后调用
  created(){
    document.title="test";
  },
  //template 被挂载dom时
  mounted(){

  },
  //生命周期钩子，对象被销毁后调用
  destroyed(){

  },
  //内容发生更新时调用
  updated() {

  }

}
</script>

<style scoped>

</style>
