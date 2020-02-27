<template>
  <div>
    <scroll class="wrapper">
      <div class="musicbox" v-for="(item,index) in musicList" :key="item.id">
        <div class="left">
          <div class="num">{{index+1}}</div>
          <div class="song">
            <div class="songname">
              <b>{{item.name}}</b>
            </div>
            <div class="singer">{{item.ar[0].name}}</div>
          </div>
        </div>
        <div class="right">
          <b>···</b>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/Scroll.vue";
export default {
  name: "MusicBox",
  components: {
    Scroll
  },
  props: {
    musicList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  height: 80vh;
}
.musicbox {
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  .left {
    display: flex;
    .num {
      margin: 5px;
      margin-left: 10px;
      font-weight: 100;
      font-size: 14px;
    }
    .song {
      margin: 5px;
      .songname {
        font-weight: 300;
        font-size: 14px;
      }
      .singer {
        margin: 3px;
        font-size: 11px;
        color: @smallword;
      }
    }
  }
  .right {
    font-weight: 500;
    line-height: 40px;
    margin-right: 10px;
  }
}
</style>