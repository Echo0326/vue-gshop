/*
* 直接更新state的多个方法对象
* */

import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types';

// import {Toast} from 'mint-ui';

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address=address;
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys;
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops;
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo=userInfo;
  },
  [RESET_USER_INFO](state){
    // Toast('退出成功！');
    state.userInfo={};
  },
  [RECEIVE_GOODS](state,{goods}){
    state.goods=goods;
  },
  [RECEIVE_INFO](state,{info}){
    state.info=info;
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings=ratings;
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if (!food.count){
      //第一次点击
      //food.count=1;

      /*
      * 对象，属性名，属性值
      * */
      Vue.set(food,'count',1);//让新增的属性也有数据绑定
      //将food添加到cartFoods
      state.cartFoods.push(food);
    } else {
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if (food.count){
      food.count--;
      if (food.count===0){
        //将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1);
      }
    }
  },
  [CLEAR_CART](state) {
    //清除food中的count
    state.cartFoods.forEach((food)=>{
      food.count=0;
    })
    //移除购物车中的购物项
     state.cartFoods = []
  }
}
