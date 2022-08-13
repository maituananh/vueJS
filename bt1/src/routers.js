import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/component-router/Home";
import Detail from "./components/component-router/Detail";

Vue.use(VueRouter)

export const routers = new VueRouter(
  {
    // mode: 'history',
    routes: [
      {path: "/", component: Home},
      {path: "/detail", component: Detail}
    ]
  })
