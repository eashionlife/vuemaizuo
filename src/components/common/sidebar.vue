<template>
<transition name="bounce">
   <aside v-show="myshow">
     <ul @click=handleClick()>
      <router-link to="/home" tag="li" activeClass="kerwinactive">home</router-link>
      <router-link to="/film" tag="li" activeClass="kerwinactive">film</router-link>
      <router-link to="/card" tag="li" activeClass="kerwinactive">card</router-link>
      <router-link to="/login" tag="li" activeClass="kerwinactive">login</router-link>
       <router-link to="/regester" tag="li" activeClass="kerwinactive">注册</router-link>
        <router-link to="/login" tag="li" activeClass="kerwinactive">我的</router-link>
    </ul>
   </aside>
  </transition>
</template>

<script>
    export default{
        name:'sidebar',//name 方便调试工具判断是哪一个组件
        data(){
            return{

            }
        },
        props:["myshow"],
        methods:{
            handleClick(){
                //通知富组件跟新
                this.$emit("event");
            }
        }

    }

</script>


<style lang="scss" scoped>
aside{
    position:fixed;
    top:50px;
    left:0px;
    width:40%;
    height:60%;
    background:#000;
    color:#fff;
    z-index:1;
}
.kerwinactive{
   background:blue;
 }
 .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform:translateX(-100%);
      opacity: 0;
    }
    100% {
      transform:translateX(0px);
      opacity: 1;
    }
  }

</style>