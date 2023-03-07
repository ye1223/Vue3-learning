<template>
  <div class="app">
    <h3>我是App组件（祖），{{ name }}---{{ price }}</h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from './components/Child.vue'
import { reactive,toRefs,provide } from 'vue';
export default {
  name:'App',
  components:{
    Child
  },
  setup(){
    const car = reactive({name:'BMW',price:'40W'})
    provide('car',car) //（取的名字，传输数据）
    return{...toRefs(car)}
  }
}
</script>

<style>
 .app{
  background-color: aqua;
  padding: 10px;
 }
</style>