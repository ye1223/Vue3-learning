<template>
    <div class="child">
        <h3>我是Child组件（子）</h3>
        <h2>{{ car_Child.name }}</h2>
        <Son></Son>
    </div>
  </template>
  
  <script>
  import { inject } from 'vue';
  import Son from '../components/Son.vue'
  export default {
    name:'Child',
    components:{
        Son
    },
    setup(){
        let car_Child = inject('car')
        console.log('car_child',car_Child)
        return{car_Child}
    }
  }
  </script>
  
  <style>
   .child{
    background-color:red;
    padding: 10px;
   }
  </style>