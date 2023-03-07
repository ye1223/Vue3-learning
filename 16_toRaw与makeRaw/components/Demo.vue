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
    <hr>

    <button @click="showRawPerson">输出最原始的person</button> 
    <button @click="showRawSum">输出最原始的sum(toRaw不能处理ref定义的数据)</button> 

    <hr><hr><br><br>
    <h2>person car {{ person.car }}</h2>
    <button @click="addCar">给人添加car属性</button>
    <button v-if="show" @click="changeCar">更改汽车属性</button>

</template>
 
<script> 
import { reactive,toRefs,ref,toRaw,markRaw} from 'vue'
export default { 
    name: 'Demo',
    setup() { 
        let sum = ref(0)
        let person = reactive({ 
            name:'张三',
            age:20,
            job:{
                j1:{
                    salary:3000 
                }
            },
            //car:{} //仅torefs，没person，可以先占位
        })

         function showRawPerson(){
            let p = toRaw(person)
            console.log(p)
         }
         function showRawSum(){
            let s = toRaw(sum)
            console.log(s)
         }

         //toRaw不能处理ref定义的数据 
         let rrr = ref({
            a:2,
            b:3
         })

         console.log(toRaw(rrr))


         /* 假如现在有一个需求，给person对象加一台车car属性 */
         var show = ref(false)

         function addCar(){
            show.value = true

            let car = {
                price:1000,
                brand:'BMW'
            }
            // person.car = car 
            person.car = markRaw(car)  //添加给reactive数据属性的值为原始值，而不为响应式
            console.log('添加car属性后的person',person)
         }

         
 
         function changeCar(){
            person.car.price = 10000
            console.log('更改car属性price后的person',person)
         }

        return { 
            ...toRefs(person),//仅通过toRefs将已有的响应式对象交给模板，只执行一次，后面如果想新添加，就不行
            person,//所以将person对象传出去
            sum,
            showRawPerson,
            showRawSum,
            rrr,//测四ref数据能否使用toRaw
            addCar,
            changeCar,
            show
        }
    }
}
</script>