<template>
  <tab-bar>
    <tab-bar-item path="/home" styleColor="green">
      <img slot="item-icon" src="../assets/imgs/tabbar/birthday.svg" alt="">
      <img slot="item-icon-active" src="../assets/imgs/tabbar/birthday-active.svg" alt="">
      <div slot="item-text">
        首页
      </div>
    </tab-bar-item>
    <tab-bar-item path="/cart" styleColor="green">
      <img slot="item-icon" src="../assets/imgs/tabbar/birthday.svg" alt="">
      <img slot="item-icon-active" src="../assets/imgs/tabbar/birthday-active.svg" alt="">
      <div slot="item-text">
        cart
      </div>
    </tab-bar-item>
    <tab-bar-item path="/category" styleColor="green">
      <img slot="item-icon" src="../assets/imgs/tabbar/birthday.svg" alt="">
      <img slot="item-icon-active" src="../assets/imgs/tabbar/birthday-active.svg" alt="">
      <div slot="item-text">
        category
      </div>
    </tab-bar-item>
    <tab-bar-item path="/profile" styleColor="green">
      <img slot="item-icon" src="assets/imgs/tabbar/birthday.svg" alt="">
      <img slot="item-icon-active" src="assets/imgs/tabbar/birthday-active.svg" alt="">
      <div slot="item-text">
        profile
      </div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/TabBar";
import TabBarItem from "components/TabBarItem";

export default {
name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
