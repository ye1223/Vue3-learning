<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
  name:'App',
  setup(){
    //自定义一个ref——myRef
    function myRef(value){
      //console.log('--myRef--',value)
      let timer

      return customRef((track,trigger)=>{
        
        return{
          get(){
            console.log(`有人在从myRef容器中读取数据了，我把${value}给它了`)

            track() //通知vue追踪value的变化，提前和getter商量，认为value有用
            return value
          },
          set(newValue){
            console.log(`有人在从myRef容器中的数据改为了${newValue}`)

            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue  
              trigger()//通知vue重新解析模板 
            },500)
          }
        }
      })
    }
    // let keyWord = ref('hello')//使用vue提供的ref
    let keyWord = myRef('hello')//使用程序员提供的ref


    return {
      keyWord
    }
  }
}
</script>