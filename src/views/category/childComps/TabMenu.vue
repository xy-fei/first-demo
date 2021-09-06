<template>
  <scroll id="tab-menu">
    <div class="tab-list">
      <div class="menu-list-item" :class="{active:index === currentIndex}" v-for="(item, index) in categories"
        @click="itemClick(index)" :key="index">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>
<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'

export default {

  name: "TabMenu",

  components: {
    Scroll
  },
  props: {
    categories: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  }

}
</script>
<style scoped>
#tab-menu {
  background-color: #f6f6f6;
  width: 200px;
  box-sizing: border-box;
}
.tab-list {
  padding-bottom: 25px;
}
.menu-list-item {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 35px;
  padding: 10px 0 10px;
}
.active {
  font-weight: 1500;
  color: red;
  background-color: #fff;
  border-left: 3px solid red;
}
</style>