<template>
    <h1>一个人的信息</h1>
    <h2>名字：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">测试触发一些Demo组件的Hello事件</button>
    <slot name="qwe">just 占位</slot>
</template>
 
<script>
import {reactive} from 'vue'
export default{
    name:'Demo',
    props:['msg','school'],
    emits:['hello'],
    /* beforeCreate(){
        console.log('--beforeCreate--',this)
    }, */
    setup(props,context){
        // console.log('--setup--',this)//setup() this->undefined
        console.log('props--',props)
        console.log('context-- ',context)
        const person = reactive({
            name:'张三',
            age:20
        })
        console.log('----slots---',context.slots)
        function test(){
            context.emit('hello',666)
        }
        return {
            person,
            test
        }
    }
}
</script>