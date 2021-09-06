<template>
  <div class="tab-bar-item" @click="btnclick">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:!isActive}">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/icons/home.png">
    <div>首页</div>
  </div>
  <div id="tab-bar-item">
    <img src="../../assets/img/icons/list.png">
    <div> 分类</div>
  </div>
  <div id="tab-bar-item">
    <img src="../../assets/img/icons/car.png">
    <div>购物车</div>
  </div>
  <div id="tab-bar-item">
    <img src="../../assets/img/icons/user.png">
    <div>我的</div> -->
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  data () {
    return {
      //isActive: true
    }
  },
  computed: {
    //属性
    isActive () {
      //this.$route代表活跃的路径
      return this.$route.path.indexOf(this.path)
      //return this.$route.path == this.path  //相等为1
    }
  },
  methods: {
    btnclick () {
      console.log(1);
      this.$router.replace(this.path)
    }
  }
}
</script>
<style >
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 59px;
  font-size: 15px;
}
.tab-bar-item img {
  margin-top: 3px;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.active {
  color: royalblue;
}
</style>