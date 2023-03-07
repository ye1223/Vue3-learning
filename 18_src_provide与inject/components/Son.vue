<template>
    <div class="son">
      <h3>我是Son组件（孙）</h3>
      <h2>{{ car_son.name }}</h2>
    </div>
  </template>
  
  <script>
  import { inject } from 'vue';
  export default {
    name:'Son',
    setup(){
      let car_son = inject('car')
      console.log('car_son',car_son)
      return{car_son}
    }
  }
  </script>
  
  <style>
   .son{
    background-color: yellow;
    padding: 10px;
   }
  </style>