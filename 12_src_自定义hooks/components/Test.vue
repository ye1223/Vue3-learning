<template>
    <h2>我是Test组件</h2>
    <span>我也可以复用usePoint模块啦啦啦</span>
    <h2>当前点击时，鼠标的坐为--x：<span>{{ point.x }}</span>,y：<span>{{ point.y }}</span></h2>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
    name: 'Tset',
    setup() {
        let point = usePoint()

        return {
            point
        }
    }
}
</script>

<style>
h2 span{
    background-color: antiquewhite;
}
</style>