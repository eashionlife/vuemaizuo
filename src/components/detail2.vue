<template>
    <div v-if="filminfo">
     <img :src="filminfo.cover.origin" />
     <h2>影片简介</h2>
     <p>{{filminfo.director}}</p>

    <router-view/>

    </div>
</template>

<script>
import axios from "axios";
    export default{
        name:'detail2',//name 方便调试工具判断是哪一个组件
        data(){
            return{
              filminfo:null
            }
        },
        mounted(){
            console.log(this.$route.query);
            axios.get(`/v4/api/film/${this.$route.params.id}?__t=1521611650459`).then(res=>{
                this.filminfo = res.data.data.film
            })
        }
    }
</script>


<style lang="scss" scoped>


</style>