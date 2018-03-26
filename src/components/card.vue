<template>
    <div>
       card
    </div>
</template>

<script>
    export default{
        name:'card',//name 方便调试工具判断是哪一个组件
        data(){
            return{

            }
        },
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            //
            setTimeout(() => {
                if(true){
                    next();// 可以挑战
                }else{
                    next("/login") //跳转到login 组件
                }
            },1000)
        }
    }

</script>


<style lang="scss" scoped>


</style>