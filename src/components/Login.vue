<template>
    <div id="box">
      <input type="text" class="account usr" placeholder="请输入账号" />
      <div class="span"></div>
      <input type="text" class="account pwd" placeholder="请输入密码" />
      <div class="span"></div>
      <van-button type="default" id="login" v-on:click="login()">登陆</van-button>
    </div>


</template>
<script>
  export default ({
    methods: {
      login : function () {
      }
    }
  })
</script>
<style>
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
    margin-top: 60px;
  }
  .span {
    margin-top: 30px;
  }
</style>
