<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <!-- 使用keep-alive，表示我们main-tab-bar所有的组件，子组件都会被保存
        然后我们现在Details组件不希望它被保存，而是重复创建，所以用
        exclude把该组件排除在外
     -->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <icon></icon>
  </div>
</template>

<script>


import MainTabBar from './components/tabbar/MainTabBar.vue'
import icon from './components/icon/icon.vue'
export default {
  name: 'app',
  components: {

    MainTabBar,
    icon
  }
}
</script>
<style scoped>
</style>