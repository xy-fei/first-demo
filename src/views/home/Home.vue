<template>
  <div id="home">
    <nav-bar class="home_navbar">
      <div slot="center">购物街</div>

    </nav-bar>
    <tab-contral class="tabcontral" :title="['流行','新款','精选']" ref="tabcontral1" v-show="istabsettop"
      @tabclick='tabclick' />
    <Scroll class="content" ref="scroll" :probe-type="3" :pullUpLoad='true' @scroll="contentscroll"
      @pullingUp="loadMore">
      <div class="homeswiper">
        <home-swiper :banners="banners" @imageload='imageload'></home-swiper>
      </div>
      <home-recommend :recommend="recommend"></home-recommend>
      <feature-view></feature-view>
      <tab-contral class="tabcontral" :title="['流行','新款','精选']" ref="tabcontral" @tabclick='tabclick' />
      <goods-list :goods="this.goods[this.currentType].list" />
    </Scroll>
    <back-top @click.native="backtopclick" v-show="isshow" />
  </div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import { getHomeMultidata, getHomedata } from 'network/home'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'
import FeatureView from './childComps/FeatureView.vue'
import TabContral from '../../components/common/TabContral.vue'
import GoodsList from '../../components/common/goods/GoodsList'

import Scroll from '../../components/common/scroll/Scroll'
import backTop from '../../components/common/goback/BackTop'



export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabContral,
    GoodsList,
    Scroll,
    backTop
  },
  name: 'Home',
  data () {
    return {
      banners: [],
      recommend: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop',
      isshow: false,
      taboffsetTop: 0,
      istabsettop: false,
      saveY: 0,


    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomedata('pop')
    this.getHomedata('new')
    this.getHomedata('sell')


    //监听item中图片加载完成
    // this.$bus.$on('itemimageload', () => {
    //   //console.log("iii");
    //   this.$refs.scroll.scroll.refresh()
    // })


  },
  activated () {
    this.$refs.scroll.scroll.scrollTo(0, (-this.saveY), 0)

  },
  deactivated () {
    this.saveY = this.$refs.scroll.scroll.position
  },
  mounted () {


  },
  methods: {
    debounce (func, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    imageload () {
      this.taboffsetTop = this.$refs.tabcontral.$el.offsetTop;
    },
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        console.log(res)
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
        //console.log(this.banners);
      })
    },
    getHomedata (type) {
      const page = this.goods[type].page + 1
      getHomedata(type, page).then(res => {
        console.log(res);
        // let array = res.data.list const NewArray = [...res.data.list, ...array]
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.scroll.finishPullUp()
      })
    },
    tabclick (index) {
      // console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
      //console.log(this.$refs.tabcontral1);
      this.$refs.tabcontral1.currentIndex = index
      this.$refs.tabcontral.currentIndex = index

    },
    backtopclick () {
      //console.log(44);
      this.$refs.scroll.scroll.scrollTo(0, 0, 600)
    },
    contentscroll (position) {
      //console.log(position);
      this.isshow = (-position.y) > 1200

      this.istabsettop = (-position.y) > this.taboffsetTop
    },
    loadMore () {
      // console.log('ff');
      // this.getHomedata(this.currentType)


      this.getHomedata(this.currentType)

    }


  }
}
</script>
<style scoped>
#home {
  padding-top: 70px;
}
.home_navbar {
  background-color: violet;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tabcontral {
  /* position: sticky;
  top: 75px; */
  position: relative;
  z-index: 9;
}

.content {
  /* height: calc(100%-129px); */

  height: 890px;

  overflow: hidden;
}
</style>