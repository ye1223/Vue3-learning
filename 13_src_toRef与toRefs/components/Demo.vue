<template>
    <h2>{{ person }}</h2>
    <h2>人的姓名：{{ name }}</h2>
    <h2>人的年龄：{{ age }}</h2>
    <h2> 薪资：{{ job.j1.salary }}</h2>

    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增长薪资</button>
</template>
 
<script> 
import { reactive ,toRef,toRefs} from 'vue'
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

        const x1 = person.name
        console.log('---x1--',x1)//输出普通数据字符串‘张三’
        //借助toRef
        const x2 = toRef(person,'age') //x2与上述reactive定义的person.age地址一致
        console.log('---x2---',x2)//ObjectRefImpl{...}

        const x3 = reactive(person.age)
        console.log('x3---',x3) //虽是响应式数据，但是地址指向不一样

        //toRefs
        const x4 = toRefs(person)
        console.log('x4---',x4)//{name: ObjectRefImpl, age: ObjectRefImpl, job: ObjectRefImpl}
            //如果想分别return，借助 扩展运算符...

        return { 
            //??? 想拆开person对象，单独得到里面的数据
            
            /* //失去响应式
            name:person.name,//只是普通value
            age:person.age,
            salary:person.job.j1.salary */

            ...toRefs(person),
            person
        }
    }
}
</script>