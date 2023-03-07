<template>
  <h1>一个人的信息</h1>
  <h2>年龄：{{ name }}</h2>
  <h2>性别：{{ age }}</h2>
  <h2>工作种类：{{ job.type }}</h2>
  <h2>工作薪水：{{ job.salary }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref} from 'vue'
export default {
  name: 'App',
  setup() {
    //数据
    let name = ref("张三")
    let age = ref(20)
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    //方法
    function changeInfo() {
      name.value = '李四'
      age.value = 22

      try {
        job.value.type.value = '后端开发工程'
        //proxy
      } catch (e) { console.log(e) }

      job.value.type = '后端开发工程'
      job.value.salary = '50k'


      console.log(name, age, job)
    }

    //返回一个对象（常用）
    return {
      age,
      name,
      changeInfo,
      job
    }
    //返回一个渲染函数
    // return () => h('h1', '哈哈哈')

  }

}
</script>

<style></style>