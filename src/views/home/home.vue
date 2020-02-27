<template>
  <div class="home">
    <nav-bar>
      <div class="avatar" slot="left">
        <van-image round width="25" height="25" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div slot="center">{{title}}</div>
      <div slot="right">发表</div>
    </nav-bar>
    <scroll
      class="homescroll"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <Swipe class="swipe" :banner="banner"></Swipe>
      <post-content :postslist="postslist" ></post-content>
    </scroll>
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "@/components/navBar";
import { reqNews } from "@/api";
import Swipe from "./swipe/swipe";
import PostContent from "./postbar/postContent";
import Scroll from "../../components/Scroll.vue";
import { reqTopic } from "@/api";

export default {
  name: "Home",
  components: {
    NavBar,
    Swipe,
    PostContent,
    Scroll
  },
  data() {
    return {
      banner: [],
      postslist: [],
      page: 1,
      title: this.$route.meta.title,
   
    };
  },
  mounted() {
    this.getNews();

    this.getTopic(this.page, 10);

    console.log(this.postslist);
  },
  methods: {
    //网络请求
    async getNews() {
      let res = await reqNews();
      this.banner = res.data.banner;
    },
    async getTopic(page, pageNum) {
      let res = await reqTopic(page, pageNum);
      this.postslist.push(...res.data);
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    loadMore() {
      this.page++;
      this.getTopic(this.page, 10);
    }
  }
};
</script>

<style lang="less" scoped>
.homescroll {
  overflow: hidden;
  height: 87vh;
}
</style>