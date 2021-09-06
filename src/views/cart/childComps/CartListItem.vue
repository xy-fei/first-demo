<template>
  <div class="cart-info">

    <div class="cart-selector">
      <cart-check-button :isChecked="cartinfo.checked" @click.native="checkClick" />
    </div>
    <div class="item-img" @click="checkClick">
      <img :src="cartinfo.img" alt="商品图片" />
    </div>
    <div class="item-info" @click="infoClick(cartinfo)">
      <div class="item-title">{{ cartinfo.title }}</div>
      <div class="item-desc">{{ cartinfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ cartinfo.newPrice }}</div>
        <div class="item-count right">x{{ cartinfo.count }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import CartCheckButton from './CartCheckButton.vue'
export default {
  name: 'CartListitem',
  props: {
    cartinfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {

    CartCheckButton
  },
  methods: {
    checkClick () {
      console.log('44');
      // this.cartinfo.checked != this.cartinfo.checked
      this.$store.commit('checkClick', this.cartinfo.iid)
    },
    infoClick (cartinfo) {
      this.$router.push("/detail/" + cartinfo.iid);
    }
  }
}
</script>
<style scoped>
.cart-info {
  width: 100%;
  height: 160px;
  display: flex;
  font-size: 40px;
  padding: 10px;
  border-bottom: 2px solid #ccc;
}
.cart-selector {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 90px;
  height: 140px;
  border-radius: 10px;
}

.item-info {
  font-size: 40px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 30px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 5px;
  position: absolute;
  top: 110px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-count {
  float: right;
}

.info-bottom .item-price {
  color: orangered;
  float: left;
}
</style>