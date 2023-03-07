<template>
  <div class="app">
    <h3>我是App组件</h3>

  </div>
</template>

<script>
import { reactive,ref,readonly,isRef,isReactive,isReadonly,isProxy } from 'vue';
export default {
  name:'App',
  setup(){
    let sum = ref(0)
    let car = reactive({name:'BMW',price:'40W'})
    let car_readonly = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car_readonly))
    console.log(isProxy(car))
    console.log(isProxy(car_readonly)) //reactive数据只读，仍是代理数据
    console.log(isProxy(sum)) //ref(0) 底层是Object.defineProperty() 实现
    
  }
}
</script>

<style>
 .app{
  background-color: aqua;
  padding: 10px;
 }
</style>