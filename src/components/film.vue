<template>
    <div>
    <ul>
      <router-link to="/film/comingsoon" tag="li" activeClass="kerwinactive">即将上映</router-link>

        <router-link to="/film/nowplay" tag="li" activeClass="kerwinactive">正在热映</router-link>
    </ul>
     <router-view> </router-view>
    </div>
</template>

<script>
    export default{
        name:'film',//name 方便调试工具判断是哪一个组件
        data(){
            return{

            }
        }
    }

</script>


<style lang="scss" scoped>
ul{
  display:flex;
  li{
    flex:1;
    height:40px;
    list-style:none;
    background:#111;
    border-bottom:1px solid #f00;
    color:#fff;
    text-align:center;
    line-height:40px;
  }
}

.kerwinactive{
   border-bottom:3px solid #f60;
}
</style>