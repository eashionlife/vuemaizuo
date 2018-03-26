<template>
    <div>
       <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="0"
          infinite-scroll-immediate-check="flase"
       >
           <li v-for="data in datalist" @click="jumpevent(data.id)" :key="data.id">
           <img :src="data.poster.origin" />
           <div>
               <h3>{{data.name}}</h3>
               <p>{{data.intro}}</p>
               <p>{{data.cinemaCount}}家影院上映 <span>{{data.watchCount}}人购票</span></p>
               <p>评分：{{data.grade}}</p>
           </div>

           </li>
       </ul>
       <p>{{loadingText}}</p>
    </div>
</template>

<script>
import router from "../router";
import axios from "axios";

    export default{
        name:'nowplay',//name 方便调试工具判断是哪一个组件
        data(){
            return{
            datalist:[],
            loading:false,
            current:1,
            total:0,
            loadingText:"正在加载中..."
             }
            },
            mounted(){
            axios.get("/v4/api/film/now-playing?page=1&count=7").then(res=>{
              this.datalist=res.data.data.films;
              this.total = res.data.data.page.total;//总页数
            })
          },
            methods:{
             jumpevent(data){
                router.push(`/detail/${data}`) //编程时导航 路径
                /*router.push({name:"kerwin",params:{id:data}})*/ //命名

               /* router.push({name:"detail2",query:{id:data}})*/ //get方式；
             },
              loadMore(){
              console.log("加载更多");
              this.current++;

             if(this.current>this.total){
              this.loading = true;
              this.loadingText= "所有的数据加载完成";
             }

              axios.get(`/v4/api/film/now-playing?page=${this.current}&count=7`).then(res=>{
                   console.log(res.data);
                   this.datalist = [...this.datalist,...res.data.data.films]
            })
          }
            }





    }

</script>


<style lang="scss" scoped>
ul{
    li{

        padding:5px;
         overflow:hidden;
         img{
            float:left;
            width:100px;
         }
         span{
            padding-left:5px;
         }
    }
    div{

      p:nth-child(4){
        color:#f60;
        height:20px;
      };
    }
}

</style>