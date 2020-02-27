<template>
  <div>
    <div class="post-contain" v-for="item in postslist" :key="item.id">
      <van-skeleton title avatar :row="3" :loading="loading">
        <div class="content-header">
          <div class="content-avater">
            <van-image
              round
              width="40"
              height="40"
              :src="'http://biubiubiu.icu'+item.user.head_link"
            />
          </div>

          <div class="content-uname">
            <b>{{item.user.nickname}}</b>
            <div class="content-time">{{item.pub_date}}</div>
          </div>
        </div>

        <div class="content-main">
          <div class="content-title">{{item.title}}</div>
          <div class="content-imgs">
            <div class="content-img" v-for="(img,index) in item.images " :key="index">
              <img :src="'http://biubiubiu.icu'+img" alt />
            </div>
          </div>
        </div>

        <div class="content-footer">
          <span style="margin-right:30px">
            <van-icon name="eye-o" />
            {{item.read_num}}
          </span>

          <span>
            <van-icon name="chat-o" />
            {{item.replytotal}}
          </span>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>

<script>
import { reqTopic } from "@/api";
export default {
  name: "PostContain",
  data() {
    return {
      loading: false
    };
  },
  props: {
    postslist: {
      type: Array,
      default() {
        return [];
      }
    },

  },
  // mounted() {
  //   this.loading = false;
  // }
};
</script>

<style lang="less" scoped>
.post-contain {
  min-height: 100px;
  border-top: 5px solid #f7f8fa;
  padding: 10px;
  border-left: 5px solid #f7f8fa;
  border-right: 5px solid #f7f8fa;
  border-top: 8px solid #f7f8fa;
  .content-header {
    display: flex;
    .content-avater {
      margin: 2px;
    }
    .content-uname {
      margin: 5px;
      font-size: 14px;
      .content-time {
        margin-top: 5px;
        font-size: 10px;
        color: #b1afaf;
      }
    }
  }
  .content-main {
    min-height: 40px;
    .content-imgs {
      display: flex;
      .content-img {
        margin: 10px 3px;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>