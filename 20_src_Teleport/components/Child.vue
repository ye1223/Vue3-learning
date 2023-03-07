<template>
    <div class="child">
        <h3>我是Child组件（子）</h3>
        <Son></Son>
    </div>
  </template>
  
  <script>
  import Son from '../components/Son.vue'
  export default {
    name:'Child',
    components:{
        Son
    }
  }
  </script>
  
  <style>
   .child{
    background-color:red;
    padding: 10px;
   }
  </style>