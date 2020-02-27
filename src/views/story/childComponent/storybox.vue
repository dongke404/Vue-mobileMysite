<template>
  <scroll class="warpper">
    <div class="storybox">
      <div class="story" v-for="item in storys.slice(0,storys.length-laststorys)" :key="item.id">
        <img :src="item.images" alt />
        <div class="sname">{{item.name}}</div>
        <div class="stype">类型:{{item.type}}</div>
        <div class="sauthor">作者：{{item.author}}</div>
      </div>
    </div>
    <div class="last-storybox">
      <div
        class="laststory"
        v-for="item in storys.slice(storys.length-laststorys,storys.length)"
        :key="item.id"
      >
        <img :src="item.images" alt />
        <div class="sname">{{item.name}}</div>
        <div class="stype">类型:{{item.type}}</div>
        <div class="sauthor">作者：{{item.author}}</div>
      </div>
    </div>
  </scroll>
</template>author

<script>
import Scroll from "@/components/Scroll.vue";
export default {
  name: "storybox",
  components: {
    Scroll
  },
  props: {
    storys: {
      type: Array,
      default() {
        return [];
      }
    },
    laststorys: {
      type: Number,
      default() {
        return 0;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.warpper {
  height: 80vh;
  overflow: hidden;
}
.storybox {
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
  .story {
    margin: 5px 0 0 0;
    img {
      width: 105px;
      height: 140px;
    }
    .sname {
      font-size: 12px;
      overflow: hidden;
    }
    .stype {
      color: @smallword;
      font-size: 10px;
      margin: 2px;
      overflow: hidden;
    }
    .sauthor {
      color: @smallword;
      font-size: 10px;
      margin: 2px;
      overflow: hidden;
    }
  }
}
.last-storybox {
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  .laststory {
    margin: 5px 10px 0 0;
    img {
      width: 105px;
      height: 140px;
    }
    .sname {
      font-size: 12px;
      overflow: hidden;
    }
    .stype {
      color: @smallword;
      font-size: 10px;
      margin: 2px;
      overflow: hidden;
    }
    .sauthor {
      color: @smallword;
      font-size: 10px;
      margin: 2px;
      overflow: hidden;
    }
  }
}
</style>