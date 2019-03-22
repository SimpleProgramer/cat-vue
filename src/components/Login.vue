<template>
    <div id="box">
      <div class="span-10"></div>
      <input type="text" class="account usr" placeholder="请输入账号" />
      <div class="span"></div>
      <input type="text" class="account pwd" ref="password" placeholder="请输入密码" />
      <div class="span"></div>
      <van-button round type="danger" size="large" style="width:77%;border:0px;background: -webkit-linear-gradient(left top, #a000fb , #c81fff);box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);" id="login" v-on:click="login()">登录</van-button>
    </div>
</template>
<script>
  export default ({
    methods: {
      initWebSocket:function(){ //初始化weosocket
        const wsuri = this.global.ws_api + "/websocket";//ws地址
        var websock = new WebSocket(wsuri);
        console.log("ready to connect ws :" + wsuri)
        this.global.setWs(websock);
        websock.onopen = () => {
          console.log("connect successed")
          this.$router.push({path: '/message'})
          this.app.$attrs()
        }
      },
      login : function () {
        this.initWebSocket()
      },
      sendWsMessage() {
        if (this.global.ws && this.global.ws.readyState == 1) {
            console.log("发送ws消息")

        }
      }
    }
  })
</script>
<style>
  .span-10 {
    min-height:40vh;
  }
  .usr {
    background: url(../../static/images/account.png) no-repeat 10px center;
    -webkit-background-size: 10%;
    background-size: 10%;
    background-color:rgba(255,255,255,0.3);
  }

  .pwd {
    background: url(../../static/images/pwd.png) no-repeat 20px 20px;
    -webkit-background-size: 10%;
    background-size: 10%;
    background-color:rgba(255,255,255,0.3);
  }
  .account{
    margin:0 auto;
    width:70%;
    height:50px;
    border-radius:30px;
    -web-kit-appearance:none;
    -moz-appearance: none;
    font-size:1.0em;
    height:2.6em;
    border:0px solid #fff;
    outline: 0;
    text-indent: 25px;
    background-position: 3px;
    padding-left: 25px;
    color: #fff;
  }
  input::-webkit-input-placeholder { /* WebKit browsers */
    color: white;
  }
  #box {
    background: url(../../static/images/bg.jpg) no-repeat center center fixed;
    -webkit-background-size: 100%;
    background-size: 100%;
    min-height:100vh;

  }
  .span {
    margin-top: 30px;
  }
  #login {
    -moz-border-radius: 30px;
  }
</style>
