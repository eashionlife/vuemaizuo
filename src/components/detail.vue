<template>
    <div v-if="filminfo">
     <img :src="filminfo.cover.origin" />
     <h2>影片简介</h2>
     <p>导演：{{filminfo.director}}</p>
     <p>演员：<span v-for="data in filminfo.actors" >{{data.name}}</span></p>
     <p>地区语言：{{filminfo.nation}}({{filminfo.language}})</p>
       <p>类型：{{filminfo.category}}</p>
     <p>{{filminfo.synopsis}}</p>


    <router-view/>

    </div>
</template>

<script>
import axios from "axios";
    export default{
        name:'detail2',//name 方便调试工具判断是哪一个组件
        data(){
            return{
              filminfo:null,
              actors:[]
            }
        },
        mounted(){
            console.log(this.$route.query);
            axios.get(`/v4/api/film/${this.$route.params.id}?__t=1521611650459`).then(res=>{
                this.filminfo = res.data.data.film;
            })
        }
    }
</script>


<style lang="scss" scoped>
img{width:100%;}
p{margin-top:10px;}
div{
    height:100%;
    background:#eee;
}
</style>