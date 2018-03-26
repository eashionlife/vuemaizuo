<template>
    <div>
  <swipe class="my-swipe">
     <swipe-item  v-for="data in looplist" :key="data.id">
      <img :src='data.imageUrl' />
     </swipe-item>
  </swipe>

  <ul>
   <li v-for="data in datalist">
       <img :src="data.cover.origin" />
       <h3>{{data.name}}</h3>
   </li>
  </ul>
    </div>
</template>

<script>
    import axios from "axios";
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';
    import { Indicator } from 'mint-ui';
    export default{
        name:'home',//name 方便调试工具判断是哪一个组件
        data(){
            return{
                looplist:[],
                datalist:[]

            }
        },
       mounted(){
         Indicator.open('加载中...')
         axios.get("/v4/api/billboard/home?__t=1521169435778").then(res=>{
            console.log(res.data);

            this.looplist=res.data.data.billboards
            }).catch(error=>{})


          axios.get("/v4/api/film/now-playing?__t=1521169435836&page=1&count=5").then(res=>{
            console.log(res.data);

            this.datalist=res.data.data.films
            }).catch(error=>{})
  // axios 方法

         /* fetch("/v4/api/film/now-playing?__t=1521169435836&page=1&count=5").then(res=>res.json()).then(res=>{
                console.log(res)
                this.datalist = res.data.films
            })*/

        Promise.all([axios.get("/v4/api/billboard/home?__t=1521169435778"),axios.get("/v4/api/film/now-playing?__t=1521169435836&page=1&count=5")]).then(res=>{
        console.log(res);
        Indicator.close();

      })

       },

      components: {
          'swipe': Swipe,
          'swipe-item': SwipeItem
  }

    }

</script>


<style lang="scss" scoped>

   .my-swipe {
  height: 200px;
  img{
    width:100%;
  }
}
ul{
    li{
        img{width:100%;}
    }
}


</style>