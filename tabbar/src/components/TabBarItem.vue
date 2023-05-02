<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
<!--    原来的写法：<div :class="{active:isActive}">-->
<!--    动态决定颜色的写法-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    styleColor:{
      type:String,
      default:"red"
    }
  },
  data(){
    return {

    }
  },
  computed:{
    isActive(){
      // console.log(this.$route.path);
     //老师的代码： return this.$route.path.indexOf(this.path)!== -1;
      return this.$route.path==this.path;
    },
    activeStyle(){
      return this.isActive?"color:"+this.styleColor:"color:black";
    //  老师的写法：return this.isActive ?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
@import "../assets/css/base.css";
.active{
  color:red;
}
</style>
