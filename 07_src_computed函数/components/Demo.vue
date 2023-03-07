<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName">
    <br>
    名 ：<input type="text" v-model="person.lastName">
    <br>
    <span>全名：{{ person.fullName }}</span>
    <br>
    全名：<input type="text" v-model="person.fullName">
</template>
 
<script> 
import { reactive, computed } from 'vue'
export default {
    name: 'Demo',
    /* computed:{//vue2
        fullName(){
            return this.person.firstName + '-' + this.person.lastName
        }
    }, */
    setup(props, context) {

        const person = reactive({
            firstName: '张',
            lastName: '三',
            age: 20
        })
        // !计算属性

        // let fullName = computed(()=>{
        //     return person.firstName + ' -- ' + person.lastName
        // })

        //---简写属性，没有考虑计算属性被修改的情况---
        //直接挂载在响应式数据person身上 
        person.fullName = computed(() => {
            return person.firstName + ' -- ' + person.lastName
        })

        //-----完整写法---
        person.fullName = computed({
            get() {
                return  person.firstName + ' -- ' + person.lastName
            },
            set(value) {
                const nameArr = value.split(' -- ')//传来的全名是‘ -- ’格式的,需要拆分
                person.firstName = nameArr[0]
                person.lastName = nameArr[1] 
            }
        })



        return {
            person,
            // fullName
        }
    }
}
</script>