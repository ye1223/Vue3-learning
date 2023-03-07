<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我＋1</button>
    <br>
    <h2>当前的信息为：{{ msg }}</h2>
    <button @click="msg+='!'"> 修改信息</button>

    <br><br><hr>
    <h2>人的姓名：{{ person.name }}</h2>
    <h2>人的年龄：{{ person.age }}</h2>
    <button @click=" person.name+='~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>

    <br>
    <h2> 薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.job.j1.salary++">增长薪资</button>
</template>
 
<script> 
import { ref,watch,reactive } from 'vue'
export default {
    name: 'Demo',
    /* watch:{
        // sum(newVal,oldVal){
        //      console.log('sum的值变化了',oldVal,newVal)
        // }
        sum:{
            immediate:true,//一上来就监视 
            deep:true,//深度监视
            handler(newVal,oldVal){
             console.log('  sum的值变化了',oldVal,newVal)
        } 
        }
    },   */
    setup() {

        let sum = ref(0)
        let msg = ref('你好啊')
        let person = ref({   //ref的value是Proxy{...}
            name:'张三',
            age:20,
            job:{
                j1:{
                    salary:3000 
                }
            }
        })

        //监视ref定义的基本数据类型（Number、Srting...，不用.value
        watch(sum,(newVal,oldVal)=>{
            console.log('求和被修改了',newVal,oldVal)
        })

        //ref定义的对象类型，.value （借助reactive）
        watch(person.value,(newVal,oldVal)=>{
            console.log('person的值被修改了',newVal,oldVal)
        })

        //ref定义的对象类型，不.value 开启深度监视（因为此时监视的是Proxy地址）
        watch(person,(newVal,oldVal)=>{
            console.log('person的值被修改了',newVal,oldVal)
        },{
            deep:true
        })

        return {
            sum,
            msg,
            person
        }
    }
}
</script>