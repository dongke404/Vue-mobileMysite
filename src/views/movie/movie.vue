<template>
  <div>
    <nav-bar>
      <div class="avatar" slot="left">
        <van-image round width="25" height="25" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div slot="center">{{title}}</div>
      <div slot="right">搜索</div>
    </nav-bar>
    <div class="movieName">{{movieName}}</div>
    <movie-player :movieid="movieid" ></movie-player>
    <movie-box :movies="movies" @playVideo='playVideo'></movie-box>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
// import Player from "xgplayer";
import { reqMovies } from "@/api";
import MovieBox from "./childComponent/moviebox"
import MoviePlayer from "./childComponent/movieplayer";
// import "./.xgplayer/skin/index.js";
export default {
  name: "Movie",
  components: {
    NavBar,
    MovieBox,
    MoviePlayer
  },
  data() {
    return {
      title: this.$route.meta.title,
      player: null,
      movies:[],
      movieName:"寄生虫",
      movieid:""
    };
  },
  mounted() {
    this.getMovies()

  },
  methods: {
    async getMovies() {
      let res = await reqMovies();
      this.movies = res.data;
      console.log(this.movies);
    },
    playVideo(id,title){
      console.log(id)
      this.movieid=id
      this.movieName=title
    }
  }
};
</script>

<style lang="less" scoped>
.movieName {
  padding: 10px;
}
</style>