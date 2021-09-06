<template>
  <div id="tabcategory">

    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>

  </div>
</template>

<script>


export default {
  name: "TabContentCategory",
  components: {

  },
  props: {
    subcategories: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
#tabcategory {
  width: 550px;
}
.item {
  text-align: center;
  font-size: 35px;
}

.item-img {
  width: 300px;
  height: 300px;
}

.item-text {
  margin-top: 15px;
}
</style>