<template>
  <div class="profilelist">
    <profile-list-item class="profile-list-item">
      <i slot="image" class="icon iconfont">&#xe613;</i>
      <span slot="desc">我的消息</span>
    </profile-list-item>
    <profile-list-item class="profile-list-item">
      <i slot="image" class="icon iconfont">&#xe71d;</i>
      <span slot="desc">积分商城</span>
    </profile-list-item>
    <profile-list-item class="profile-list-item special">
      <i slot="image" class="icon iconfont">&#xe6ad;</i>
      <span slot="desc">会员卡</span>
    </profile-list-item>
    <profile-list-item class="profile-list-item">
      <i slot="image" class="icon iconfont">&#xe636;</i>
      <span slot="desc">购物车</span>
    </profile-list-item>
    <profile-list-item class="profile-list-item">
      <i slot="image" class="icon iconfont">&#xe60c;</i>
      <span slot="desc">点赞购物APP</span>
    </profile-list-item>
  </div>
</template>
<script>
import ProfileListItem from './ProfileListItem.vue'
export default {
  name: 'ProfileList',
  components: {
    ProfileListItem
  }
}
</script>
<style scoped>
.profile-list-item {
  margin: 15px;
  padding: 10px 0 0 15px;
  display: flex;
}
.profile-list-item i {
  font-size: 35px;
  height: 38px;
}
.profile-list-item span {
  font-size: 35px;
  margin-left: 10px;
  flex: 1;
  line-height: 45px;
  border-bottom: 2px solid #ddd;
}
.special {
  border-bottom: 6px solid #ddd;
}
.special .profile-list-item span {
  border-bottom: none;
}
</style>