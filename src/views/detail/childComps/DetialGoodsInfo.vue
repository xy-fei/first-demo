<template>
  <div id="detail_goods_info" v-if="Object.keys(detailInfo).length != 0">
    <div class="info_title">
      {{ detailInfo.title }}
    </div>
    <div class="info-price">
      <span class="n-price">{{detailInfo.newPrice}}</span>
      <span class="o-price">{{detailInfo.oldPrice}}</span>
      <span v-if="detailInfo.discount" class="discount" :style="{backgroundColor:detailInfo.disconutBgcolor}">
        {{detailInfo.discount}}
      </span>
    </div>
    <div class="info-other">
      <span>{{detailInfo.columns[0]}}</span>
      <span>{{detailInfo.columns[1]}}</span>
      <span>{{detailInfo.services[detailInfo.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-services-item" v-for="index in detailInfo.services.length-1" :key="index">
        <img :src="detailInfo.services[index-1].icon">
        <span>{{detailInfo.services[index-1].name}}</span>
      </span>
    </div>

  </div>
</template>
<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    loadImg () {

    }
  }
}
</script>
<style scoped>
#detail_goods_info {
  margin-top: 15px;
  padding: 0 10px;

  border-bottom: 5px solid #f2f5f8;
}
.info_title {
  font-size: 40px;
  color: #222;
}
.info-price {
  color: #999;
  margin-top: 15px;
}
.info-price .n-price {
  font-size: 30px;
  color: pink;
}
.info-price .o-price {
  font-size: 25px;
  margin-left: 7px;
  text-decoration: line-through;
}
.info-price .discount {
  font-size: 25px;
  padding: 3px 5px;
  color: #fff;
  background-color: red;
  border-radius: 9px;
  margin-left: 6px;

  position: relative;
  top: -8px;
}
.info-other {
  color: #999;
  margin-top: 22px;
  line-height: 30px;
  display: flex;
  font-size: 25px;
  border-bottom: 1px solid black;
  justify-content: space-between;
}
.info-services {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-services-item img {
  width: 20px;
}
</style>