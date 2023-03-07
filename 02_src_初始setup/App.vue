<template>
  <h1>我是App组件</h1>
  <h1>一个人的信息</h1>
  <h2>年龄：{{ name }}</h2>
  <h2>性别：{{ age }}</h2>
  <button @click="sayHello">说话</button>

  <h2>性别：{{ sex }}</h2>
  <button @click="sayWellcome">sayWellcome</button>

  <hr>
  <button @click="getVue3DataFromVue2">vue2获取vue3setupData</button>
  <button @click="getVue2DataFromVue3">vue3获取vue2setupData</button>

  <br>
  <h1>vue2、setup同名：{{ sameDataName }}</h1>
</template>

<script>
import { h } from 'vue'

export default {
  name: 'App',
  data() {
    return {
      sex: '男',
      sameDataName:'vue2hhhh'
    }
  },
  methods: {
    sayWellcome(){
      alert("welcome")
    },
    getVue3DataFromVue2(){
      console.log(this.age)
      console.log(this.name)
      console.log(this.sayHello)
    }
  },
  //此处只是测试setup，暂不考虑响应式的问题
  setup() {
    //数据
    let name = "张三"
    let age = 20

    let sameDataName = "setuphhhh"
    //方法
    function sayHello() {
      alert(`我叫${name}，今年${age}了`)
    }

    function getVue2DataFromVue3(){
      console.log(this.sex)
    }

    //返回一个对象（常用）
    return{
      age,
      name,
      sayHello
    }
    //返回一个渲染函数
    // return () => h('h1', '哈哈哈')

  }

}
</script>

<style></style>