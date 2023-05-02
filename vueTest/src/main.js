import Vue from 'vue'
import App from './App'
//导入文件夹，会自动去找index文件
import router from './router'

Vue.config.productionTip = false

console.log(App);//为一个普通对象，其中的render函数即处理后的template（vue-template-compiler处理成render函数）

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  //render：渲染函数中的模块"App"并将它替换el下的标签
  render:function(h){
    return h(App);//在使用App这个组件是已经被编译后的普通对象，没有template
  }
  /*
  render 函数的使用
  render:function (createElement){
    return createElement('h2')
    return createElement('h2',{class:'box'}) 添加属性
    return createElement('h2',{class:'box'},['hello world',createElement('button',['按钮']]));
    添加class属性，文本内容及标签
    return createElement(App);  传入组件
  }
  //创建一个h2标签替换掉el的标签
   */
})
