<template>
  <div class="money-item">
    <p>
      <span class="font-color">{{listItem.count}}</span>
      {{listItem.unit}}
    </p>
    <p>{{listItem.desc}}</p>
  </div>
</template>

<script>
export default {
  name: 'MoneyItem',
  props: {
    listItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.money-item {
  font-size: 30px;
  line-height: 40px;
  color: #666;
}
.font-color {
  color: pink;
  font-size: 40px;
}
</style>