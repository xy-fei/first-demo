<template>
  <div v-if="Object.keys(commentInfo).length !==0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar">
      <span> {{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | dateShow }}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from '../../../common/utils'
export default {
  name: 'DetailCommentInfo',

  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }

  },
  filters: {
    dateShow (value) {
      const time = new Date(value * 1000)
      return formatDate(time, "yyyy-MM-dd mm:hh:ss");
    }
  },

}
</script>
<style scoped>
.comment-info {
  padding: 15px 15px;
  color: #333;

  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  height: 70px;
  line-height: 70xp;
  border-bottom: 2px solid rgba(0, 0, 0, 1);
}
.header-title {
  float: left;

  font-size: 30px;
}
.header-more {
  float: right;
  margin-right: 20px;
  font-size: 30px;
}
.info-user {
  padding: 10px 0 5px;
}
.info-user img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.info-user span {
  font-size: 20px;
  position: relative;
  top: -15px;
  margin-left: 10px;
}
.info-detail {
  padding: 0 5px 15px;
}
.info-detail p {
  font-size: 25px;
  color: #777;
  line-height: 1.5;
}
.info-other {
  font-size: 25px;
  color: #999;
  margin-top: 10px;
}
.info-other .date {
  margin-top: 10px;
}
.info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  width: 80px;
  height: 80px;
  margin-right: 5px;
}
</style>