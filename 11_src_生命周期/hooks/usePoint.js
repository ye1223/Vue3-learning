import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function (){
    //实现”鼠标打点“相关的的数据
    let point = reactive({
        x: 0,
        y: 0
    })

    //实现”鼠标打点“相关的方法  
    let savePoint = (event) => {
        console.log(event.pageX, event.pageY)
        point.x = event.pageX
        point.y = event.pageY
    }

    //实现”鼠标打点“相关的钩子
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint) //移除'click'监听事件（需要指定回调名）
    })

    return point
}

