<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style >
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 15px 0 25px;
  border-bottom: 12px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
}
</style>