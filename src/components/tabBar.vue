<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o" to="home">首页</van-tabbar-item>
    <van-tabbar-item name="music" icon="music-o" to="music">音乐</van-tabbar-item>
    <van-tabbar-item name="story" icon="description" to="story">小说</van-tabbar-item>
    <van-tabbar-item name="photo" icon="photo-o" to="photo">图片</van-tabbar-item>
    <van-tabbar-item name="movie" icon="video-o" to="movie">电影</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  },
  mounted() {
    this.activeNav();
  },
  methods: {
    activeNav() {
      if (this.$route.name) {
        this.active = this.$route.name;
      }
    }
  }
};
</script>

<style lang="less">
</style>