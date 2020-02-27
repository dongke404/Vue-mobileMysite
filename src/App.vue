<template>
  <div id="app">
    <router-view />
    <tab-bar class="nav"></tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from "@/components/tabBar";

export default {
  components: {
    TabBar
  }
};
</script>


<style lang="less">
@import "./assets/css/normalize.css";

@color:#333;
.avatar {
  display: flex;
  margin-left: 10px;
  align-items: center;
}
</style>

