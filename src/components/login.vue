<template>
    <div>
    <form>
   <mt-field label="邮箱" placeholder="请输入邮箱/请输入手机号" type="email" v-model="email" state=""></mt-field>
   <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" state=""></mt-field>
   <button type="button" @click="handle">登陆</button>
   </form>
    </div>
</template>

<script>
import router from "../router";
import axios from "axios";
    export default{
        name:'login',//name 方便调试工具判断是哪一个组件
        data(){
            return{
               email:"",
               password:""
            }
        },
      methods:{
      handle(){
      axios.post("/api/login",{
            username:this.username,
            password:this.password,
            email:this.email,
            phone:this.phone
           }).then(res=>{
          if(res.data=="jump"){
            console.log(res.data);
            router.push(`/home`);

          }
            }).catch(error=>{
          cosole.log(1111);
            })
    }
  }

    }

</script>


<style lang="scss" scoped>


</style>