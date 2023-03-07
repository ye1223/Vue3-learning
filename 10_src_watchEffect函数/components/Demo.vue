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
import { ref,watch,reactive,watchEffect } from 'vue'
export default {
    name: 'Demo',
    setup() {

        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name:'张三',
            age:20,
            job:{
                j1:{
                    salary:3000 
                }
            }
        })

        
        //监视
        /* watch(sum,(newVal,oldVal)=>{
            console.log('求和被修改了',newVal,oldVal)
        },{immediate:true }) */


        //! watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调
        watchEffect(()=>{  //开始会immediate:true
            const x1 = sum.value //监视sum数据
            const x2 = person.job.j1.salary //监听salary
            console.log('watchEffect指定的回调执行了')
            console.log(x1)
        })



        return {
            sum,
            msg,
            person
        }
    }
}
</script>