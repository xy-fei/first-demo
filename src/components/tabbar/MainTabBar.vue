<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~assets/img/icons/home.png">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/icons/home_1.png">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="~assets/img/icons/list.png">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/icons/list_1.png">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="~assets/img/icons/car.png">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/icons/car_1.png">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/img/icons/user.png">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/icons/user_1.png">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/tabbar/TabBar';

import TabBarItem from 'components/tabbar/TabBarItem.vue';
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>