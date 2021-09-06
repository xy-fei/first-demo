<template>
  <div class="goods_list1">

    <GoodslistItem v-for="(item, id) in goods" :goods-item="item" :key="id" />

  </div>

</template>
<script>
import GoodslistItem from './GoodslistItem'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodslistItem
  }
}
</script>
<style scoped>
.goods_list1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>