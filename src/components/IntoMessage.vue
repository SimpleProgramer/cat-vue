<template>
  <div>
    <van-nav-bar
      title=
      border
      fixed
    >
      <span slot="title">{{ title }}</span>
      <van-icon name="arrow-left" slot="left" size="large" />
      <span size="large" slot="right"  style="font-size: 1.2em;font-weight:bolder;color:#1989fa;text-align: center;margin: 0 auto;">...</span>
    </van-nav-bar>
    <van-list
      v-model="loading"
      error-text="网络或许在开小差呢qwq"
      loading-text=" "
      @load="onLoad"
      style="margin-top:46px;"
    >
      <van-card
        num="19：59"
        centered
        v-for="item in chating"
        :key="item.fromUserAccount"
        :class="[item.self?'rightA':'leftA']"
      >
        <div slot="desc" class="leftContent" style="font-size: 1.1em;">
          {{ item.msg }}
          小黑屋 （纯文字游戏） 编辑 讨论
          中文名 小黑{{ item.msg }}
          小黑屋 （纯文字游戏） 编辑 讨论
          中文名 小黑{{ item.msg }}
          小黑屋 （纯文字游戏） 编辑 讨论
          中文名 小黑屋 原版名称 A Dark Room 游戏类型 纯文字冒险游戏 游戏平台 电脑  NS [1]  游戏平台 Android 发行日期 2018年 NS版 [1]  内容主题 冒险，生存 玩家人数 单人
          目录    小黑屋 （纯文字游戏） 编辑 讨论
          中文名 小黑{{ item.msg }}
          小黑屋 （纯文字游戏） 编辑 讨论
          中文名 小黑{{ item.msg }}
          小黑屋 （纯文字游戏） 编辑 讨论
          中文名 小黑屋 原版名称 A Dark Room 游戏类型 纯文字冒险游戏 游戏平台 电脑  NS [1]  游戏平台 Android 发行日期 2018年 NS版 [1]  内容主题 冒险，生存 玩家人数 单人
          目录

          <div class="allow" ></div>
        </div>
        <div slot="num" style="position: relative;right: 1%;top: 27%;font-size: 1.1em;">{{ item.lastTime }}</div>
        <img slot="thumb" style="  width: 80%;margin-top:35%; border-radius: 50%;"  src="../../static/images/tx.jpg" />
      </van-card>
    </van-list>


    <van-tabbar>
      <van-tabbar-item icon="volume-o"></van-tabbar-item>
      <van-field
        border
        size="normal"
       />
      <van-tabbar-item icon="" >发送</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 1125334796,
        title: "朔夜",
        loading: false,
        chating: [{
          fromUserAccount: 1125334796,
          toUserAccount: 1252173251,
          self: true,
          name: '',
          msg: '你说我儿豁嘛',
          lastTime: ''
        },{
          fromUserAccount: 1252173251,
          toUserAccount: 1125334796,
          name: '',
          self: false,
          msg: '你说我儿豁嘛',
          lastTime: ''
        }],
        error: false

      }
    },
    methods:{
      onLoad() {

      }
    }
  }

</script>
<style>
  #msg {
    background-color: #fff;
    -webkit-background-size: cover;
    background-size: cover;

  }
  .van-list {
    position: fixed;
    top: 0;
    bottom: 9%;
    overflow: auto;
  }

  .van-card {
    background-color: #fff;
    padding: 2px 10px;
  }
  .van-card:not(:first-child){
    margin-top: 10%;
  }
  .van-card:last-child{
    margin-bottom: 20px;
  }
  .van-card__content {
    height: auto;
    top:30px;
  }
  .leftContent {
    border : 1px solid #000;
    border-radius: 10px;
  }
  .rightA .van-card__thumb {
    height: auto;
  }
  .rightA a {
    float: right;
  }
  .rightA .van-card__header {
    display: block;
  }

  .rightA .allow {
    width: 12px;
    height: 12px;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
    position: relative;
    right: 0px;
  }
  .leftA .allow {
    width: 12px;
    height: 12px;
    border-bottom: 1px solid #999;
    border-left: 1px solid #999;
    position: relative;
    left: 0px;
    transform:rotate(45deg);

  }

  .van-cell {
    width: 70%;
    height: 80%;
    margin-top: 5px;
    border: 1px solid #f6f7f8;
  }

</style>
