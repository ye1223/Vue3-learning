<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="重庆邮电大学"> 
    <template #qwe>
      <span>啦啦啦啦</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name:'App',
  components:{
      Demo
  },
  setup(){
    function showHelloMsg(value){
       alert(`你好啊，你出发了hello事件，我收到的参数是${ value  }!`)
    }

    return{
      showHelloMsg
    }
  }
}
</script>