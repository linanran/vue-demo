<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",
  components:{
    TabBarItem
  }
}
</script>

<style scoped>
@import "../assets/css/base.css";

</style>
