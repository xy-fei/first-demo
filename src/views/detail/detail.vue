<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @titleClick="titleClick" ref="navbar" />
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentscroll">
      <detail-swiper :topImages='topImage' />
      <detail-goods-info :detailInfo="goods" />
      <detail-shop-info :shop="shop" />
      <detail-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-params ref="params" :paramInfo="goodsparam" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommends" :goods="recommends" />

    </scroll>
    <back-top @click.native="backtopclick" v-show="isshow" />
    <detail-buttom @addToCar="addToCar" />

  </div>

</template>
<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'

import DetailGoodsInfo from './childComps/DetialGoodsInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailInfo from './childComps/DetailInfo.vue'
import DetailParams from './childComps/DetailParams.vue'
import GoodsList from '../../components/common/goods/GoodsList.vue'
import DetailButtom from './childComps/DetailButtom.vue'


import { getGoodsDetail, Goods, Shop, GoodsParam, getRecommend } from '../../network/goodsDetail'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import { debounce } from '../../common/utils'
import BackTop from '../../components/common/goback/BackTop.vue'

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailInfo,
    DetailParams,
    Scroll,
    DetailCommentInfo,
    GoodsList,
    DetailButtom,

    BackTop,


  },
  data () {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsparam: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: '',
      isshow: false,
      product: {},



    }
  },
  created () {

    this.iid = this.$route.params.iid
    // console.log(this.iid)

    getGoodsDetail(this.iid).then(res => {
      console.log(res);
      const data = res.data.result
      this.topImage = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.goodsparam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    getRecommend().then(res => {
      this.recommends = res.data.data.list
    })
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      // console.log(this.themeTopYs);
    }, 600)

  },
  updated () {

  },
  methods: {

    imageLoad () {
      this.$refs.scroll.scroll.refresh()
      //console.log('11');
      this.getThemeTopY()


    },
    titleClick (index) {
      //console.log(index);
      this.$refs.scroll.scroll.scrollTo(0, - this.themeTopYs[index], 100)
    },
    contentscroll (position) {
      // console.log(position);
      this.isshow = (-position.y) > 1200
      const positionY = -position.y

      let length = this.themeTopYs.length
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i && (i < length - 1 && positionY < this.themeTopYs[i + 1] && positionY >= this.themeTopYs[i]) || this.currentIndex !== i && (i === length - 1 && positionY >= this.themeTopYs[i])) { //console.log(i); 
          this.currentIndex = i
          // console.log(this.currentIndex);
          this.$refs.navbar.currentindex = this.currentIndex
        }
      }
    },
    backtopclick () {
      //console.log(44);
      this.$refs.scroll.scroll.scrollTo(0, 0, 600)
    },
    addToCar () {
      this.product.iid = this.iid
      this.product.img = this.topImage[0]
      this.product.title = this.goods.title
      this.product.desc = this.goods.desc
      this.product.newPrice = this.goods.realPrice
      this.$store.dispatch('addcart', this.product).then(res => {
        //console.log(res);
        this.$toast.show(res, 2000)
      })
    }


  }

}
</script>
<style scoped>
#detail {
  position: relative;
  background-color: white;
  z-index: 10;
}
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: white;
}
.content {
  height: 860px;
  overflow: hidden;
}
</style>