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
      id="msgBox"
      v-model="loading"
    >
      <van-card
        num="19：59"
        centered
        v-for="item in chating"
        :key="item.fromUserAccount"
        :class="[item.self?'rightA':'leftA']"
      >
        <div class="::after"></div>
        <div slot="desc" class="leftContent" style="font-size: 1.1em;">
          {{ item.lastMessage }}
        </div>

        <div slot="num" style="position: relative;right: 1%;top: 27%;font-size: 1.1em;">{{ item.lastTime }}</div>
        <img slot="thumb" style="  width: 80%;margin-top:35%; border-radius: 50%;"  src="/static/images/tx.jpg" />
      </van-card>
    </van-list>


    <van-tabbar>
      <van-tabbar-item icon="volume-o"></van-tabbar-item>
      <van-field
        border
        size="normal"
        v-model="msgInput"
       />
      <van-tabbar-item icon="" v-on:click="sendMsg"  >发送</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 1125334796,
        title: '',
        msgInput: "1231",
        loading: false,
        chating: [{
          fromUserAccount: 0,
          toUserAccount: 0,
          name: '',
          self: false,
          lastMessage: '',
          lastTime: '',
          lastTimestamp: 0,
        }],
        nowChat : {},

        error: false

      }
    },
    methods:{
      loadUser() {
        console.log("？？？？？？？？？")
        var loginUser = sessionStorage.getItem("nowLogin")
        if (loginUser != null && loginUser != '' && loginUser != 'undefined' && loginUser != 'null') {
          var jsonUser = JSON.parse(loginUser);
          this.nowChat.fromUserAccount = jsonUser.accounts[0]
          sessionStorage.getItem("toUserAccount")
        }
      },
      intoCallback : function (json) {
        console.log("收到了消息回调:")
        var loginUser = sessionStorage.getItem("nowLogin")
        var jsonUser = JSON.parse(loginUser)
        //{"chats":[{"fromUserAccount":1125334796,"headImg":"abc","lastMessage":"强啊老铁","lastTime":"14:25","lastTimestamp":1553495128,"name":"朔夜","toUserAccount":1252173251},{"fromUserAccount":1125334796,"headImg":"abc","lastMessage":"lgd今天斗鱼直播阿","lastTime":"15:13","lastTimestamp":1553498008,"name":"香槟","toUserAccount":892021606}],"code":200,"type":2}
        if (json.code == 200) {
          if (json.type == 2) {
            json.chats.forEach(c => {
              c.self = c.fromUserAccount == jsonUser.accounts[0]
            })
            this.chating = json.chats;
            console.log("初始化聊天记录:" + JSON.stringify(this.chating))
            this.nowChat.toUserAccount = this.chating[0].self ? this.chating[0].toUserAccount : this.chating[0].fromUserAccount
            this.title = this.chating[0].self ? this.chating[0].toUserName : this.chating[0].fromUserName
          }else if (json.type == 3) {
            var item = {};

            item.self = jsonUser.accounts[0] == json.accounts[0];
            item.fromUserAccount = json.accounts[0]
            item.toUserAccount = json.accounts[1]
            item.lastMessage = json.body
            item.lastTimestamp = json.timestamp
            item.lastTime = json.timeStr
            this.chating.push(item);
            var va1  = sessionStorage.getItem("nowTalking")
            var result = JSON.parse(va1);
            result.chats = this.chating
            sessionStorage.setItem("nowTalking",JSON.stringify(result))
          }

        }
      },
      sendMsg : function () {
        console.log(this.msgInput)
        var imMessage = this.global.imMessage
        imMessage.accounts[0] = this.nowChat.fromUserAccount
        imMessage.accounts[1] = this.nowChat.toUserAccount
        imMessage.type = 3
        imMessage.body = this.msgInput
        imMessage.timestamp = new Date().getTime()
        var item = {};
        item.fromUserAccount = this.nowChat.fromUserAccount
        item.toUserAccount = this.nowChat.toUserAccount
        item.lastTimestamp = this.global.imMessage.timestamp
        console.log(imMessage)
        this.socketApi.sendSock(this.global.imMessage,this.intoCallback)
      }
    },
    created() {
      this.loadUser();
       var chatingCache = sessionStorage.getItem("nowTalking")
      if (chatingCache != '' && chatingCache != 'undefined' && chatingCache != null && chatingCache != 'null') {
        this.intoCallback(JSON.parse(chatingCache))
      } else {
        this.chating = this.$route.params.chats;
        sessionStorage.setItem("nowTalking",JSON.stringify(this.chating))
      }

    },
    mounted() {
      document.getElementById("msgBox").scrollTo(0,document.getElementById("msgBox").scrollHeight+1000)
    }
  }

</script>
<style scoped>
  #msg {
    background-color: #fff;
    -webkit-background-size: cover;
    background-size: cover;

  }
  .van-list {
    position: fixed;
    top: 46px;
    bottom: 9%;
    overflow: auto;
  }

  .van-card {
    background-color: #fff;
    padding: 2px 10px;
    width: 100vw;
  }
  .van-card:not(:first-child){
    margin-top: 10%;
  }
  .van-card:last-child{
    margin-bottom: 20px;
  }
  .van-card__content {
    height: auto;
    top:25px;
    max-width: 66%;
    display: inline-block;
  }
  .leftContent {
    border-radius: 10px;
    padding: 5px;
    line-height: 30px;
    min-width: 20px;
  }
  .van-card__thumb {
    width: 60px;
  }
  .rightA::after {
    clear:both;content:'';display:block;width:0;height:0;visibility:hidden;
  }
  .leftA::after {
    clear:both;content:'';display:block;width:0;height:0;visibility:hidden;
  }
  .rightA .van-card__content {
    float: right;
  }
  .leftA .van-card__content {
    float: left;
  }
  .rightA .van-card__thumb {
    height: auto;
  }
  .leftA .van-card__thumb {
    height: auto;
  }
  .rightA a {
    float: right;
  }
  .leftA a {
    float: left;
  }
  .rightA .van-card__header {
    display: block;
  }
  .leftA .van-card__header {
    display: block;
  }
  .rightA .leftContent {
    background-color: #5FB878;
    color: #fff;
    min-height: 30px;
    text-align: right;
    letter-spacing: 2px;
  }
  .leftA .leftContent {
    background-color: #f1f1f1;
    color: #000;
    min-height: 30px;
    text-align: left;
    letter-spacing: 2px;
  }


  .van-cell {
    width: 70%;
    height: 80%;
    margin-top: 5px;
    border: 1px solid #f6f7f8;
  }

</style>
