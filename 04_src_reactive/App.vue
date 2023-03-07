<template>
  <h1>一个人的信息</h1>
  <h2>年龄：{{ person.name }}</h2>
  <h2>性别：{{ person.age }}</h2>
  <h2>工作种类：{{ person.job.type }}</h2>
  <h2>工作薪水：{{ person.job.salary }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    /* //数据
    let name = ref("张三")
    let age = ref(20)
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    const job2 = reactive({
      type: '前端工程师',
      salary: '30k',
      a: {
        b: {
          c: 666
        }
      }
    }) */

    let person = reactive({
      name:'张三',
      age:20,
      job:{
        type:'教师',
        salary:'10k'
      },
      a:{
        b:{
          c:{
            test:100
          }
        }
      }
    })


    //方法
    function changeInfo() {
     /*  name.value = '李四'
      age.value = 22

      job.value.type = '后端开发工程'
      job.value.salary = '50k'

      job2.salary = "1000k" */


      console.log(name, age, job, job2)
    }

    //返回一个对象（常用）
    return {
      // age,
      // name,
      // job,
      // job2,
      person,
      changeInfo
    }
    //返回一个渲染函数
    // return () => h('h1', '哈哈哈')

  }

}
</script>

<style></style>