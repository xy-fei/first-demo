<template>
  <div class="detailbuttom">
    <div class="btm_tool">
      <div class="tool_item">
        <i class="icon service"></i>
        <div>客服</div>
        <button open-type="contact"></button>
      </div>
      <div class="tool_item">
        <i class="icon shop"></i>
        <div>店铺</div>
        <button open-type="share"></button>
      </div>
      <div class="tool_item">
        <i class="icon select"></i>
        <div>收藏</div>
      </div>
      <div class="tool_item btn_cart" @click="addToCar">
        加入购物车
      </div>
      <div class="tool_item btn_buy">
        立即购买
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailButtom',
  methods: {
    addToCar () {
      this.$emit('addToCar')
    }
  }
}
</script>
<style scoped>
.btm_tool {
  border-top: 2px solid #cccccc;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90px;
  background-color: #fff;
  display: flex;
}
.btm_tool .icon {
  display: block;
  width: 32px;
  height: 32px;
  margin: 10px auto -2px;
  background: url("../../../assets/img/common/botton.png") 0 0/100%;
}
.tool_item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  position: relative;
}
.tool_item button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.btn_cart {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffa500;
  color: #fff;
  font-size: 30rpx;
  font-weight: 600;
}
.btn_buy {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: #fff;
  font-size: 30rpx;
  font-weight: 600;
}
</style>