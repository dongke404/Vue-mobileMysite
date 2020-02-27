<template>
  <div>
    <scroll class="wrapper">
      <div
        class="movie-box"
        v-for="item in movies"
        :key="item.subject.id"
        :data-movieid="item.subject.id"
        :data-movietitle="item.subject.title"
        @click="playvideo"
      >
        <div class="movieimg">
          <img :src="'http://biubiubiu.icu/static/images/movieImg/'+item.subject.id+'.jpg'" />
        </div>
        <div class="content">
          <div class="title">{{item.subject.title}}</div>
          <div class="info">
            <van-rate
              :value="item.subject.rate/2"
              size="10"
              allow-half
              color="#ee0a24"
              void-color="#eee"
              void-icon="star"
            />
            评分:{{item.subject.rate}}
          </div>
          <div class="info">
            <span>类型:{{item.subject.types}}</span>
          </div>
          <div class="info">片长:{{item.subject.duration}}</div>
        </div>
        <div
          class="right"
          :data-movieid="item.subject.id"
          :data-title="item.subject.title"
          :data-actors="item.subject.actors"
          :data-introduce="item.introduce"
          :data-comment="item.subject.short_comment.content"
          @click="showcontent"
        >简介>></div>
      </div>
    </scroll>
    <van-popup v-model="show" position="top" custom-style="height:20%;">
      <div class="popupContain">
        <div class="title">
          <b>片名:</b>
          {{title}}
        </div>
        <div class="actors">
          <b>演员:</b>
          {{actors}}
        </div>
        <div class="introduce">
          <b>简介:</b>
          {{introduce}}
        </div>
        <div class="comment">
          <b>评论:</b>
          {{comment}}
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Scroll from "@/components/Scroll.vue";
export default {
  name: "Moviebox",
  data() {
    return {
      show: false,
      movieid: "",
      title: "",
      actors: "",
      introduce: "",
      comment: ""
    };
  },
  props: {
    movies: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Scroll
  },
  methods: {
    showcontent(e) {
      this.show = true;
      let movieInfo = e.target.dataset;
      this.movieid = movieInfo.movieid;
      this.title = movieInfo.title;
      this.actors = movieInfo.actors;
      this.introduce = movieInfo.introduce;
      this.comment = movieInfo.comment;
    },
    playvideo(e){
      let currentid=e.currentTarget.dataset.movieid
      let currenttitle=e.currentTarget.dataset.movietitle
      this.$emit("playVideo",currentid,currenttitle)
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  overflow: hidden;
  height: 52vh;
}
.movie-box {
  display: flex;
  margin-top: 3px;
  .movieimg {
    padding-left: 2px;
    img {
      width: 54px;
      height: 78px;
    }
  }
  .content {
    flex-grow: 1;
    padding-left: 5px;
    .title {
      font-size: 16px;
      height: 18px;
      overflow: hidden;
    }
    .info {
      margin-top: 3px;
      font-size: 13px;
      color: #333333;
    }
  }
  .right {
    padding: 3px;
    color: #333333;
    font-size: 12px;
  }
}
.popupContain {
  padding: 10px;
  .actors {
    margin-top: 5px;
    font-size: 14px;
  }
  .introduce {
    margin-top: 5px;
    font-size: 14px;
  }
  .comment {
    margin-top: 5px;
    font-size: 14px;
  }
}
</style>