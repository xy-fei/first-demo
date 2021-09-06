<template>
  <div class="toast" v-show="isshow">
    {{message}}
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    // message: {
    //   type: String,
    //   default () {
    //     return ''
    //   }
    // },
    // show: {
    //   type: Boolean,
    //   default () {
    //     return false;
    //   }


    // }
  },
  data () {
    return {
      message: '',
      isshow: false
    }

  },
  methods: {
    //es6写法赋予默认值
    show (message = '默认文字', durtion = 2000) {
      this.isshow = true;
      this.message = message
      setTimeout(() => {
        this.isshow = false;
        this.message = ''
      }, durtion)
    }
  }
}
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 15px;
  font-size: 30px;
  z-index: 999;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>