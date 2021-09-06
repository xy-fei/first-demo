<template>
  <div>
    <nav-bar>
      <div slot="left" class="backtitle" @click="goback">
        ＜
      </div>
      <div class="detail_navbar" slot="center">
        <div class="detail_navbar-item" v-for="(item,index) in title" :key="index"
          :class="{active:index === currentindex}" @click="titleClick(index)">{{item}}</div>
      </div>

    </nav-bar>
  </div>
</template>
<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
  name: 'DetialNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      title: [
        '商品', '参数', '评论', '推荐'
      ],
      currentindex: 0
    }

  },
  methods: {
    titleClick (index) {
      this.currentindex = index;
      this.$emit('titleClick', index)
    },
    goback () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.detail_navbar {
  display: flex;
  font-size: 20px;
}
.detail_navbar-item {
  flex: 4;
}
.active {
  color: red;
}
.backtitle {
  font-size: 30px;
}
</style>