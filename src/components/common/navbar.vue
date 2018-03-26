<template>
  <nav>
     <div class="left">
        <slot></slot>
        <span>卖座电影</span>
     </div>
     <div class="right">
     <i class="iconfont icon-account"></i>
      <span>大连</span>
     </div>
  </nav>
</template>

<script>
    export default{
        name:'navbar',//name 方便调试工具判断是哪一个组件
        data(){
            return{

            }
        }
    }

</script>


<style lang="scss" scoped>
 nav{
    /* position:fixed; */
    left:0;
    top:0;
    width:100%;
    height:50px;
    line-height:50px;
    background:#000;
    color:#fff;
    z-index:1;
 }
 .left{
  float:left;
 }
 .right{
    float:right;
    span{
        padding-right:20px;
    }
 }
</style>