<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" class="tab-menu" @selectItem="selectItem" />
      <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category :subcategories="showcategoryData" />
        </div>
      </scroll>
    </div>
  </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import TabMenu from './childComps/TabMenu.vue'
import TabContentCategory from './childComps/TabContnetCategory.vue'
import { getCategroy, getSubcategory } from '../../network/category'
export default {
  name: 'Category',
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory

  },
  data () {
    return {
      categories: [],
      categoryData: [],
      currentIndex: -1,
      currentType: 'pop'

    }
  },
  computed: {
    showcategoryData () {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    }
  },
  created () {
    this._getCategroy()

  },
  mounted () {

  },
  methods: {
    _getCategroy () {
      getCategroy().then(res => {
        console.log(res);
        this.categories = res.data.data.category.list
        console.log(this.categories);
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            },
          };
        }
        this._getSubcategory(0)
      })

    },
    _getSubcategory (index) {
      this.currentIndex = index
      const mailKey = this.categories[index].maitKey;
      console.log(mailKey);
      getSubcategory(mailKey).then((res) => {
        console.log(res);
        this.categoryData[index].subcategories = res.data.data
        this.categoryData = { ...this.categoryData };
      })
    },
    selectItem (index) {
      this._getSubcategory(index);
    }
  }
}
</script>
<style scoped>
#category {
  height: 100vh;
}
.category-nav {
  background-color: hotpink;
  font-weight: 700;
  color: white;
  font-size: 30px;
}
.content {
  overflow: hidden;
  width: 100%;
  position: absolute;
  left: 0;

  top: 85px;
  bottom: 59px;
  display: flex;
}
.tab-menu {
}
.tab-conten {
  flex: 1;
}
</style>