<template>
  <div id="profile">
    <nav-bar class="navbar"><template #center>我的档案</template></nav-bar>
    <user-info />
    <money />
    <profile-list />
  </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar.vue'

import UserInfo from './childComps/UserInfo.vue'
import Money from './childComps/Money.vue'
import ProfileList from './childComps/ProfileList.vue'
export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    Money,
    ProfileList


  }
}
</script>
<style scoped>
.navbar {
  background-color: hotpink;
  color: #fff;
  font-weight: 800;
  font-size: 35px;
}
</style>