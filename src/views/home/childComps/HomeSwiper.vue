<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" @load="imageload">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import Swiper from '../../../components/common/swiper/Swiper'
import SwiperItem from '../../../components/common/swiper/SwiperItem'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isload: false
    }
  },
  components: {

    Swiper,
    SwiperItem,

  },
  methods: {
    imageload () {
      if (!this.isload) {
        this.$emit('imageload')
      }
      this.isload = true
    }
  }
}
</script>
