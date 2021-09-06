<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list />
    <cart-botton-bar />
  </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartList from './childComps/CratList.vue'
import CartBottonBar from './childComps/CartBottonBar.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottonBar
  },
  computed: {

    ...mapGetters({
      length: 'cartlLength'
    })
  }
}
</script>
<style scoped>
.navbar {
  background-color: hotpink;
  font-size: 35px;
  font-weight: 700;
  color: white;
}
</style>