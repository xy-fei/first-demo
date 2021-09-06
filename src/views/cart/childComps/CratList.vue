<template>
  <div class="cart-list">

    <scroll class="content" :probeType="3" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :cartinfo="item" />
    </scroll>

  </div>
</template>
<script>

import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'
import Scroll from '../../../components/common/scroll/Scroll.vue'
export default {
  name: 'CratList',
  computed: {
    ...mapGetters({
      cartList: 'cartList'
    })
  },
  components: {
    Scroll,
    CartListItem
  },
  activated () {
    this.$refs.scroll.scroll.refresh()
  }
}
</script>
<style scoped>
.cart-list {
  height: 100vh;
}
.content {
  overflow: hidden;
  margin-top: 70 px;
  height: calc(100% - 133px);
}
</style>