<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>

</template>
<script>
export default {
  name: 'GoodslistItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }

  },
  data () {
    return {

    }
  },
  computed: {
    showImage () {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  created () {

  },

  methods: {
    itemClick () {
      this.$router.push('/detail/' + this.goodsItem.iid)
    },
    imageLoad () {
      this.$bus.$emit('itemimageload')

    }
  }

}
</script>
<style scoped>
.goods-item {
  padding-bottom: 60px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 20px;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: red;
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/20px 14px;
}
</style>