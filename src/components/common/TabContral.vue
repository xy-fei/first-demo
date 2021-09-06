<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in title" :key="index" :class="{active:index === currentIndex}"
      @click="tabclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabContral',
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabclick (index) {
      this.currentIndex = index
      this.$emit('tabclick', index)
    }
  }
}
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 25px;
  height: 50px;
  line-height: 50px;
  background-color: rgba(255, 255, 255, 0.719);
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}

.active {
  border-bottom: 2px solid red;
  color: red;
}
</style>