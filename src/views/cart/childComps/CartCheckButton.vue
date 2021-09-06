<template>
  <div class="check-button">
    <img src="~/assets/img/common/check.svg" :class="{check:isChecked}" alt="">
  </div>
</template>

<script>
export default {
  name: 'CartCheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
  }
}
</script>

<style>
.check-button {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check-button img {
  width: 45px;
  height: 45px;
  display: inline-block;
}
.check {
  border-radius: 50%;
  background-color: red;
  border: 2px solid red;
}
</style>