<template>
<div>
<form>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username" state=""></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email" state=""></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" state=""></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" state=""></mt-field>
    <button type="button" @click="handle">zhuce</button>
</form>


</div>
</template>

<script>
import router from "../router";
import axios from "axios";
    export default{
        name:'regester',//name 方便调试工具判断是哪一个组件
        data(){
            return{
             state:"error",
             username:"",
             email:"",
             password:"",
             phone:""
            }
},

    methods:{
    handle(){
    axios.post("/api",{
            username:this.username,
            password:this.password,
            email:this.email,
            phone:this.phone
           }).then(res=>{
          if(res.data=="isshave"){
            router.push(`/login`);

          }
            }).catch(error=>{

            })
    }
  }
           /* mounted(){
           axios.post("/api",{
            username:this.username,
            password:this.password,
            email:this.email,
            phone:this.phone
           }).then(res=>{
             console.log(111)
            }).catch(error=>{})
        }*/


    }


</script>


<style lang="scss" scoped>


</style>