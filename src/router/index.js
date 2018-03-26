import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/home";
import Film from "../components/film";
import Card from "../components/card";
import Nowplay from "../components/nowplay";
import Comingsoon from "../components/comingsoon";
import Detail from "../components/detail";
import Detail2 from "../components/detail2";
import Login from "../components/login";
import Regester from "../components/regester";

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/film',
      component: Film,
      children:[
        {
          path: 'nowplay',
          component: Nowplay
        },
        {
            path: 'comingsoon',
            component: Comingsoon
        },
        {
            path: '/',
            redirect: '/film/nowplay'
        }
      ]

    },
      {
        path: '/card',
        component: Card,
         meta:{
            kerwinRequired:true
        }
      },
      { name: 'detail',
        path: '/detail/:id',
        component: Detail
      },
       {
        name: 'detail2',
        path: '/detail2/:id',
        component: Detail2
       },
       {
        path: '/login',
        component: Login
       },
       {
        path: '/regester',
        component: Regester
       },
       {
         path: '*',
      redirect: '/home'
     }
  ]
})
