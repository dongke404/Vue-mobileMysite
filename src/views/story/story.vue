<template>
  <div>
    <nav-bar>
      <div class="avatar" slot="left">
        <van-image round width="25" height="25" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div slot="center">{{navtitle}}</div>
      <div slot="right">搜索</div>
    </nav-bar>
    <van-tabs :active="active" swipeable @click="tabclick">
      <scroll :scrollX="true" :scrollY="false" class="warpper">
        <van-tab title="热门"></van-tab>
        <van-tab v-for="(item,index) in storyTypeList" :key="index" :title="item" ></van-tab>
      </scroll>
    </van-tabs>
    <story-box :storys="storys" :laststorys="laststorys"></story-box>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import Scroll from "@/components/Scroll.vue";
import StoryBox from "./childComponent/storybox";
import { reqStoryTypeList, reqStorys } from "@/api";
export default {
  name: "Story",
  components: {
    NavBar,
    Scroll,
    StoryBox
  },
  data() {
    return {
      navtitle: this.$route.meta.title,
      active: 0,
      storyTypeList: [],
      storys: [],
      screenWidth: document.documentElement.clientWidth,
      // screenHeight: document.documentElement.clientHeight
    };
  },
  computed: {
    laststorys: function() {
      let len = this.storys.length;
      let rowNum = parseInt((this.screenWidth - 20) / 105); //算出的每行的元素个数
      let lastitems = len % rowNum;
      // console.log("一行几个：",rowNum, "一行余几个：",lastitems);
      return lastitems;
    }
  },
  mounted() {
    this.getStoryTypeList();
    this.getStorys();
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.documentElement.clientWidth;
        // this.screenHeight = document.documentElement.clientHeight;
      })();
    };
  },
  methods: {
    async getStoryTypeList() {
      let res = await reqStoryTypeList();
      this.storyTypeList = res.data;
      console.log(res);
    },
    async getStorys(stype="") {
      let res = await reqStorys(stype);
      this.storys = res.data;
      console.log(res);
    },
    tabclick(index){
      if (index===0) {
         this.getStorys()
      }
      this.getStorys(this.storyTypeList[index-1])
    }
  }
};
</script>

<style lang="less" scoped>
.warpper {
  overflow: hidden;
  width: 100vw;
}
</style>