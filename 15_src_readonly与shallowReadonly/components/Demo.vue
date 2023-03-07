<template>
     <h2>人的姓名：{{ name }}</h2>
    <h2>人的年龄：{{ age }}</h2>
    <h2> 薪资：{{ job.j1.salary }}</h2>

    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增长薪资</button>


    <hr>
    <h2>sum的值为：{{ sum }}</h2>
    <button @click="sum++">点击sum的值+1</button>
</template>
 
<script> 
import { reactive,toRefs,readonly,shallowReadonly,ref} from 'vue'
export default {
    name: 'Demo',
    setup() { 
        let person = reactive({ 
            name:'张三',
            age:20,
            job:{
                j1:{
                    salary:3000 
                }
            }
        })


        /* 使用场景，不希望数据被修改 */

    //    person = readonly(person ) //所有层次只读
       person = shallowReadonly(person ) //仅让第一层只读


       let sum = ref(0)
        // sum = readonly(sum)
        sum = shallowReadonly(sum)

        return { 
            ...toRefs(person),
            sum
        }
    }
}
</script>