<template>
  <div>
    <h3>路由测试页面</h3>
    <ul>
      <li v-for="(item,idx) in $store.state.city.list" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  /*
  声明使用的模板
   */
  layout: 'search',
  data() {
    return {
      list: []
    }
  },
  async mounted() {
    /*
    将当前模板的全局变量指针赋值给self
     */
    let self = this
    /*
    发送异步数据请求 status为请求结果，data为获取到的数据
     */
    let {status, data: {list}} = await axios.get('/city/list')
    if (status === 200) {
      /*
      将获取到的数据存放到当前模板的数据中
       */
      self.list = list
    } else {
      global.console.log('weichenggong')
    }
  }
}
</script>
<style>
</style>
