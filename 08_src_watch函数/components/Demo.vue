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

        const sum = ref(0)
        let msg = ref('你好啊')
        //监视

        //情况一：监视ref所定义的响应式数据
        /* watch(sum,(newVal,oldVal)=>{
             console.log('sum值的变了',newVal,oldVal)
        },{
            immediate:true
        }) 
        watch(msg,(newVal,oldVal)=>{
             console.log('msg值的变了',newVal,oldVal)
        })  */
        //情况二：监视多个ref所定义的响应式数据
        /* watch([sum,msg],(newVal,oldVal)=>{
            console.log('sum|mas值的变了',newVal,oldVal)
        },{
            immediate:true,
        }) */

        let person = reactive({
            name:'张三',
            age:20,
            job:{
                j1:{
                    salary:3000 
                }
            }
        })
        //情况三：监视一个reactive所定义的响应式数据的全部属性
            //注意1：此处无法正确的获得oldVal（如果实在想监视一个属性，就单独提出来用ref做响应式）
            //注意2：强制开启了深度deep监视（deep配置无效，不能关闭）  
       /*  watch(person,(newVal,oldVal)=>{
            console.log('person的值变化了',newVal,oldVal)
        }) */

        //情况四：监视reactive监视所定义的一个响应式数据的某一个属性 
        watch(()=>person.job.j1.salary,(newVal,oldVal)=>{
            console.log('person的age 值变化了',newVal,oldVal)
        },{
            deep:true
        })

        //情况五：监视reactive监视所定义的一个响应式数据的某些属性 
        /* watch([()=>person.name,()=>person.age],(newVal,oldVal)=>{
            console.log('person的age 值变化了',newVal,oldVal)
        }) *///deep不奏效

        //特殊情况：
        /* watch(()=>person.job,(newVal,oldVal)=>{
            console.log('person的job变化了',newVal,oldVal)
        },{deep:true}) */ //deep配置有效（监视reactive对象中的 

        return {
            sum,
            msg,
            person
        }
    }
}
</script>