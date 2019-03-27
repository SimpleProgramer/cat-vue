import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Message from '@/components/Message'
import Into from '@/components/IntoMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/message',
      name: 'Message',
      component: Message

    },
    {
      path: '/into',
      name: 'Into',
      component: Into
    }
  ]
})
