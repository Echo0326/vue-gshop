/*
* 入口js
*/
import Vue from 'vue';
import {Button} from 'mint-ui';

import App from './App';
import router from './router';
import store from './store/index';

//注册全局组件标签

Vue.component(Button.name,Button)//

//全局方法


new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
})

