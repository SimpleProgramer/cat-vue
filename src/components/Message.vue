<template>
  <div>
    <van-nav-bar
      title="消息"
      border
    >
      <van-icon name="plus" size="large" slot="right" />
    </van-nav-bar>
    <van-list
      v-model="loading"
      error-text="网络或许在开小差呢qwq"
      loading-text=" "
      @load="onLoad"
    >
      <van-swipe-cell :right-width="100" :left-width="100" :key="item._id" v-for="item in msgs">
        <van-card
          num="19：59"
          centered
          @click="startMessage(item)"
        >
          <img slot="thumb" style="  width: 80%;    position:absolute;  transform: translate(-50%, 12%);border-radius: 50%;"  src="/static/images/tx.jpg" />
          <div slot="title"  class="leftContent" style="font-weight: bolder;font-size:1.5em;">{{ item.name }}</div>
          <div slot="desc" class="leftContent" style="font-size: 1.1em;">{{ item.lastMessage }}</div>
          <div slot="num" style="position: absolute;right: 1%;top: 27%;font-size: 1.1em;">{{ item.lastTime }}</div>
        </van-card>
        <van-button type="danger" slot="right">删除</van-button>
      </van-swipe-cell>
    </van-list>
    <van-tabbar>
      <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o" dot>好友</van-tabbar-item>
      <van-tabbar-item icon="star-o" >发现</van-tabbar-item>
      <van-tabbar-item icon="smile-o" dot>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        msgs: [{
          fromUserAccount: 0,
          toUserAccount: 0,
          fromUserName: '',
          toUserName: '',
          fromUserHeadImg: '',
          toUserHeadImg: '',
          name: '',
          headImg: '',
          lastMessage: '',
          lastTime: '',
          type: 2
        }],
        error: false

      }
    },
    methods:{
      onLoad() {
        //console.log(this.global.imMessage.accounts[0])
        this.loading = false

        this.axios.get(this.global.rest_api + '/api/v1/chatlist',{
          params: {
            account: this.global.imMessage.accounts[0]
          }
        })
          .then(function(res){
            //console.log(res.data.data)
            var msgs = res.data.data
            msgs.forEach( e => {
              e.name = e.fromUserAccount == this.global.imMessage.accounts[0] ? e.fromUserName : e.toUserName
              e.headImg = e.fromUserAccount == this.global.imMessage.accounts[0] ? e.fromUserHeadImg : e.toUserHeadImg
            })
            this.msgs = msgs
          }.bind(this))
          .catch(function(err){
            if(err.response) {
              //console.log(err.response)
            }
          }.bind(this))
      },

      notifyForMsg:function (json) {
        //console.log("收到的信息:" + JSON.stringify(json))
        sessionStorage.setItem("nowTalking",JSON.stringify(json))
        //根据登陆用户判断发送人和接收人
        this.$router.push({name: 'Into',params:json})
      },
      startMessage(event) {
        //console.log(this.msgs)
        var imMessage = this.global.imMessage
        imMessage.accounts[0] = event.fromUserAccount
        imMessage.accounts[1] = event.toUserAccount
        imMessage.type = 2
        this.socketApi.sendSock(imMessage,this.notifyForMsg);

        //
      }
    }
  }

</script>
<style scoped>
  #msg {
    background-color: #fff;
    -webkit-background-size: cover;
    background-size: cover;

  }
  .leftContent {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
  }
  .van-card__content {
    position: absolute;
    left: 27%;
    width: 70%;
  }
  .van-card:not(:first-child) {
    margin-top: 0px;
    background-color: #fff;
    border-bottom: 1px solid #fafafa;
  }
  .van-swipe-cell__right .van-button {
    height: 100%;
    width: 100%;
  }

</style>
