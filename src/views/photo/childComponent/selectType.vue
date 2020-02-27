<template>
  <div class="contain">
    <div class="typebox" v-for="item in imagesTypes" :key="item.id" :title="item.type" :typeId="item.id" @click="clickTypes">{{item.type}}</div>
  </div>
</template>

<script>
export default {
  name: "SelectType",
  props: {
    imagesTypes: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
    clickTypes(e){
      console.log(e.target.attributes.typeid.value)
      this.$emit('changeTypes', e.target.title,e.target.attributes.typeid.value) 
    }
  }
};
</script>

<style lang="less" scoped>
.contain {
  height: 100vh;
  width: 20vh;
  margin-top: 30px;
}
.typebox {
  margin: 10px;
  width: 100px;
}
</style>