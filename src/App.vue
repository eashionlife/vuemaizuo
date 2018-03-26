<template>
  <div>
      <navbar>
        <i class="iconfont icon-category" @click="isshow=!isshow"> </i>
       </navbar>
       <sidebar :myshow="isshow" @event="isshow=false"></sidebar>


        <section>
        <router-view/>
        </section>                 <!-- 路由容器 -->
  </div>
</template>

<script>
import sidebar from "./components/common/sidebar";
import navbar from  "./components/common/navbar";
export default {
  name: 'App',
  data(){
   return{
    isshow:false
   }
  },
  components:{
  sidebar,
  navbar
}
}


</script>

<style>
*{padding:0;margin:0;}
ul,li{list-style:none;}
div{
  navbar{
    position:fixed;
    left:0;
    top:0;
  }
}
</style>
