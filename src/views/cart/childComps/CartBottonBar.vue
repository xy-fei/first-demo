<template>
  <div class="botton-bar">
    <div class="check-content">
      <cart-check-button class="check-button" :isChecked="isSelectAll" @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="price">
      合计: {{totalPrice}}
    </div>
    <div class="right" @click="calaClick">
      去结算({{totalCount}})
    </div>
  </div>
</template>
<script>
import CartCheckButton from './CartCheckButton.vue'
export default {
  name: 'CartBottonBar',
  components: {
    CartCheckButton
  },

  computed: {
    totalPrice () {
      //console.log(this.$store.state.cartList);
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.newPrice * item.count
      }, 0).toFixed(2)
    },
    totalCount () {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll () {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.checked
      )
    }
  },
  methods: {
    checkClick () {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = false);
      }
      else {
        this.$store.state.cartList.forEach(item => item.checked = true);
      }
    },
    calaClick () {
      if (!this.isSelectAll) {
        this.$toast.show('请选择购买的商品')
      }
    }
  }

}
</script>
<style scoped>
.botton-bar {
  height: 60px;
  background-color: #eee;
  position: sticky;
  bottom: 59px;
  display: flex;
  line-height: 60px;
  display: flex;
}
.check-content {
  width: 120px;
  display: flex;
  align-items: center;
  font-size: 25px;
}
.check-button {
  width: 40px;
  height: 40px;
  margin-left: 20px;
}
.price {
  font-size: 25px;
  margin-left: 150px;
  flex: 1;
}
.right {
  width: 130px;
  font-size: 25px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>