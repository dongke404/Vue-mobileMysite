<template>
  <div class="photocontain">
    <nav-bar>
      <div class="avatar" slot="left">
        <van-image round width="25" height="25" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div slot="center">{{navtitle}}</div>
      <div slot="right">
        <div @click="showPopup">{{imagetype}}</div>
      </div>
    </nav-bar>
    <van-popup round v-model="show" position="left" custom-style="height: 50%;">
      <select-type :imagesTypes="imagesTypes" v-on:changeTypes="changeTypes"></select-type>
    </van-popup>
    <div class="photos">
      <vue-waterfall-easy
        class="waterfall"
        :imgsArr="images"
        srcKey="imageUrl"
        @scrollReachBottom="addData"
        @imgError="imagedelete"
      >
        <div class="img-info" slot-scope="props">
          <div class="some-info" v-html="props.value.describe"></div>
        </div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import Scroll from "@/components/Scroll.vue";
import SelectType from "./childComponent/selectType";
import { reqImagesTypes, reqImages } from "@/api";
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  name: "Photo",
  components: {
    NavBar,
    Scroll,
    SelectType,
    vueWaterfallEasy
  },
  data() {
    return {
      imagesTypes: [],
      images: [],
      navtitle: this.$route.meta.title,
      show: false,
      imagetype: "选择",
      typeId: 1,
      curPage: 1
    };
  },

  mounted() {
    this.getImagesTypes();
    this.getImages(this.typeId, this.curPage);
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    async getImagesTypes() {
      let res = await reqImagesTypes();
      this.imagesTypes = res.data;
      console.log(this.imagesTypes);
    },
    async getImages(typeId, curPage) {
      let res = await reqImages(typeId, curPage);
      this.images=res.data
      console.log(this.images);
    },
    async addImages(typeId, curPage) {
      let res = await reqImages(typeId, curPage);
      this.images.push(...res.data);
      console.log(this.images);
    },

    changeTypes(type, typeId) {
      console.log(type, typeId);
      this.show = false;
      this.imagetype = type;
      this.curPage = 1;
      this.typeId=typeId
      this.getImages(typeId, this.curPage);
    },
    addData() {
      this.curPage++;
      this.addImages(this.typeId, this.curPage);
    },
    imagedelete(errimage) {
      console.log(errimage);
    }
  }
};
</script>

<style lang="less" scoped>
.photos {
  width: 100%;
  height: 100vh;
}
.some-info {
  font-size: 10px;
  padding: 2px;
}

</style>