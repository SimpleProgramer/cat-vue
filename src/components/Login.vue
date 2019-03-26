<template>
    <div id="box">
      <div ></div>
      <div class="span-10">
        <img slot="thumb" style="  width: 30%;    position:absolute;  transform: translate(-50%, 12%);border-radius: 50%;"  src="../../static/images/tx.jpg" />
      </div>

      <div id="content">
        <input type="text" class="account usr" v-model="account" placeholder="请输入账号" />
        <div class="span"></div>
        <input type="password" class="account pwd" v-model="password" placeholder="请输入密码" />
        <div class="span"></div>
        <van-button round type="danger" size="large" style="width:77%;border:0px;background: -webkit-linear-gradient(left top, #a000fb , #c81fff);box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);" id="login" v-on:click="login()">登录</van-button>
      </div>
    </div>
</template>
<script>
  export default ({
    data() {
      return {
        account: '1125334796',
        password: '123456'
      }
    },
    methods: {
      initWebSocket:function(){ //初始化weosocket

        this.global.imMessage.accounts[0] = this.account;
        this.global.imMessage.password = this.password;
        this.global.imMessage.type = 1;
        this.socketApi.sendSock(this.global.imMessage,this.loginCallback)
      },
      login : function () {
        this.initWebSocket()
      },
      loginCallback : function (json) {
        console.log("denglu huidiaos" + json);
        if (200 == json.code && json.type == 1) {
          this.$router.push({path: '/message'})
        } else {
          //{"accounts":[1125334796],"body":"密码错误","code":403,"password":"waitgd250","timestamp":1553311756708,"type":1}
          console.log(json.body)
          this.$toast.fail(json.body);
        }
      }
    }
  })
</script>
<style>
  .span-10 {
    position: absolute;
    top: 20%;
    width: 100%;
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
  #box,content {
    background: url(../../static/images/bg.jpg) no-repeat center center fixed;
    -webkit-background-size: 100%;
    background-size: 100%;
    min-height:100vh;

  }
  #content {
    position: absolute;
    top: 45%;
    width: 100%;
  }
  .span {
    margin-top: 30px;
  }
  #login {
    -moz-border-radius: 30px;
  }
</style>
