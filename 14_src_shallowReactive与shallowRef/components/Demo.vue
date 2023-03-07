<template>
    <h4>当前的x值是：{{ x }}</h4>
    <button @click="x++">点我x+1</button>

    <hr>

    <h2>人的姓名：{{ name }}</h2>
    <h2>人的年龄：{{ age }}</h2>
    <h2> 薪资：{{ job.j1.salary }}</h2>

    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增长薪资</button>
</template>
 
<script> 
import { shallowReactive ,reactive,toRefs,ref , shallowRef} from 'vue'
export default {
    name: 'Demo',
    setup() {
        // let person = shallowReactive({ //只考虑第一层数据的响应式
        let person = reactive({ 
            name:'张三',
            age:20,
            job:{
                j1:{
                    salary:3000 
                }
            }
        })

        let x = shallowRef(0) //shallowRef对于基本数据类型就是响应式||对于对象类型，不做处理，.value是Object，而非Proxy

        return { 
            ...toRefs(person),
            x 
        }
    }
}
</script>