<template>
  <div ref="player" ></div>
</template>

<script>
import Player from "xgplayer";
export default {
  name: "MoviePlayer",
  data() {
    return {
      player: null,
      indexVideo:27010768,
    };
  },
  props: {
    movieid: {
      type: String,
      default() {
        return "";
      }
    }
  },
  mounted() {
    this.player = new Player({
      el: this.$refs.player,
      url: "http://biubiubiu.icu/static/videos/" + this.indexVideo + ".mp4",
      fluid: true,
      autoplay: true
    });
  },
  updated(){
    console.log(111,this.movieid)
  },
  watch: {
    movieid: function(val) {
      console.log("watch:", val);
      // this.player.destroy(false)
      // this.player = new Player({
      //   el: this.$refs.player,
      //   url: "http://biubiubiu.icu/static/videos/" + val + ".mp4",
      //   fluid: true,
      //   autoplay: true
      // });
      this.player.src = "http://biubiubiu.icu/static/videos/" + val + ".mp4"
    }
  }
};
</script>

<style>
</style>