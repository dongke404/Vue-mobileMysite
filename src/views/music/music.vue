<template>
  <div>
    <nav-bar>
      <div class="avatar" slot="left">
        <van-image round width="25" height="25" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div slot="center">{{title}}</div>
      <div slot="right">搜索</div>
    </nav-bar>
    <div class="music-main">
      <van-sidebar class="music-left" :active-key="activeKey" @change="onChange">
        <van-sidebar-item
          v-for="(val,key,index) in toplist"
          :title="val"
          :key="key"
          @click="onClick(index,key)"
        />
      </van-sidebar>
      <div class="music-right">
        <div class="head">
          <van-icon class="allplay" name="play-circle-o" color="green" />
          <div>全部播放({{musicList.length}})</div>
        </div>

        <music-box :musicList="musicList"></music-box>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import MusicBox from "./musicbox/musicBox.vue";
import { reqMusic } from "@/api";
export default {
  name: "Music",
  components: {
    NavBar,
    MusicBox
  },
  data() {
    return {
      activeKey: 0,
      title: this.$route.meta.title,
      toplist: {
        "0": "新歌榜",
        "1": "热歌榜",
        "2": "原创歌曲榜",
        "3": "飙升榜",
        "24": "古典音乐榜",
        "25": "电音榜",
        "6": "美国Billboard周榜",
        "8": "iTunes榜",
        "26": "抖音排行榜"
      },
      musicList: []
    };
  },
  mounted() {
    this.getMusic(this.activeKey);
  },

  methods: {
    onClick(index, key) {
      this.activeKey = index;
      this.getMusic(key);
    },
    onChange(event) {
      console.log("change", event);
    },
    async getMusic(id) {
      let res = await reqMusic(id);
      this.musicList = res.playlist.tracks;
    }
  }
};
</script>

<style lang="less" >
.music-main {
  display: flex;
  width: 100vw;
  .music-left {
    min-width: 100px;
  }
  .music-right {
    width: 100%;
    .head {
      display: flex;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: 300;
      .allplay {
        margin: 13px;
      }
    }
  }
}
</style>
