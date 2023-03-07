<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h3>稍等一会，马上加载出来</h3>
      </template>
    </Suspense> 
  </div>
</template>

<script>
// import Child from './components/Child.vue' 
import {defineAsyncComponent} from 'vue'//异步引入组件
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))

export default {
  name:'App',
  components:{
    Child
  }
}
</script>

<style>
 .app{
  background-color: aqua;
  padding: 10px;
 }
</style>