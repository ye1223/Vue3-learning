<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我＋1</button>
    <hr>
    <h2>当前点击时，鼠标的坐为--x：<span>{{ point.x }}</span>,y：<span>{{ point.y }}</span></h2>
</template>
 
<script>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import usePoint from '../hooks/usePoint'
export default {
    name: 'Demo',
    setup() {
        //数据
        let sum = ref(0)

        let point = usePoint()

       /*  let point = reactive({
            x: 0,
            y: 0
        })
  
        let savePoint = (event) => {
            console.log(event.pageX, event.pageY)
            point.x = event.pageX
            point.y = event.pageY
        }

        onMounted(() => {
            window.addEventListener('click', savePoint)
        })

        onBeforeUnmount(() => {
            window.removeEventListener('click', savePoint) //移除'click'监听事件（需要指定回调名）
        }) */

        return {
            sum,
           point
        }

    }
}
</script>


<style scoped>
h2 span {
    background-color: aqua;
}
</style>