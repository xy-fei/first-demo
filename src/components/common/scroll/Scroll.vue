<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Scroller from '../../../../node_modules/better-scroll/dist/better-scroll'


export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    observeImage: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      scroll: null
    }
  },

  mounted () {
    this.scroll = new Scroller(this.$refs.wrapper, {

      click: true,
      mouseWheel: true,
      // 等到页面图片加载完之后，刷新content高度
      observeImage: this.observeImage,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true
    })
    this.scroll.scrollTo(0, 0, 0)
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {

        // console.log(position)
        this.$emit('scroll', position)
      })
    }
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        //console.log('上拉加载更多')
        this.$emit('pullingUp')
      })
    }
    this.scroll.refresh()

  },
  watch: {
    data () {
      setTimeout(this.refresh, 20)
    }
  },
  methods: {
    getSceoll () {
      return this.scroll ? this.scroll.y : 0
    }
  }

}

</script>
<style scoped>
</style>