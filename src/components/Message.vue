<template>
  <div>
    <van-nav-bar
      title="消息"
      fixed
      border
    >
      <van-icon name="plus" size="large" slot="right" />
    </van-nav-bar>
    <van-tabbar>
      <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item icon="friends-o" dot>好友</van-tabbar-item>
      <van-tabbar-item icon="star-0" info="5">发现</van-tabbar-item>
      <van-tabbar-item icon="smile-o" dot>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style>
  #msg {
    background-color: #fff;
    -webkit-background-size: cover;
    background-size: cover;

  }
</style>
