<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="230" :stop-propagation="false">
    <van-swipe-item v-for="(item,index) in banner" :key="index">
      <a  :href="item.newsUrl">
        <img class="swipe-img" :src="item.imgUrl" :alt="item.imgUrl" />
        <div class="newstitle">{{item.title}}</div>
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Swipe",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
};
</script>

<style lang="less" scoped>
.swipe-img {
  width: 100%;
  height: 100%;
}
.my-swipe .van-swipe-item {
  position: relative;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.newstitle {
  margin: 0;
  padding: 0;
  color: #fff;
  position: absolute;
  left: 20px;
  bottom: 20px;
}
</style>