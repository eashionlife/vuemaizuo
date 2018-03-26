<template>
    <div>
    <ul
     v-infinite-scroll="loadMore"
     infinite-scroll-disabled="loading"
     infinite-scroll-distance="0"
     infinite-scroll-immediate-check="flase">
          <li v-for="data in datalist" :key="data.id" @click="jiazai" v-lazy="data">
           <img :src="data.poster.origin" />
           <p>{{data.name}}</p>
           <p>{{data.intro}}</p>
       </li>
    </ul>

    </div>
</template>

<script>
import router from "../router";
import axios from "axios";
    export default{
        name:'comingsoon',//name 方便调试工具判断是哪一个组件
        data(){
            return{
             datalist:[],
             current:1
            }
        },
         mounted(){
            axios.get("/v4/api/film/coming-soon?page=1&count=7").then(res=>{
              this.datalist=res.data.data.films;
              this.total = res.data.data.page.total;//总页数
            })
          },
          methods:{
          jiazai(data)
             {

             },
             loadMore(){
                  this.current++;
                  axios.get(`/v4/api/film/coming-soon?page=${this.current}&count=7`).then(res=>{
                console.log(res.data);
                   this.datalist = [...this.datalist,...res.data.data.films]

                  })
               }
          }
    }

</script>


<style lang="scss" scoped>

div{
    ul{
        li{ overflow:hidden;
            padding: 10px;
            border-bottom:1px dashed #ccc;
            p{
                padding-left:120px;
            }
            p:nth-child(2){
            height:24px;
            line-height:24px;

            }
            p:nth-child(3){
            color:#8e8e8e;
            height:24px;
            line-height:24px;
            }
            img{
        width:100px;
        float:left;
    }
        }
    }
}
</style>