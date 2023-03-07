<template>
    <div class="child">
        <h3>我是Child组件</h3>
         <h4>{{ sum }}</h4>
    </div>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    name:'Child',
   async setup(){
      let sum = ref(0)

      let p = new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve({
            sum
          })
        }, 1000);
      })
      return await p

    }
  }
  </script>
  
  <style>
   .child{
    background-color:red;
    padding: 10px;
   }
  </style>