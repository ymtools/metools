<template>
     <div class="layui-layout layui-layout-admin"  id="app">
        <div class="layui-header ymheader" v-if="!readyShowContent">
            <a href="/"><img class="logo layui-circle" src="./assets/images/logo.png"></a>
            <div class="user-action">
                <a href="/">个人工具站- By 易墨</a>
            </div>
        </div>
        <div class="layui-side layui-bg-black" v-if="!readyShowContent">
            <div class="layui-side-scroll">
                <v-header :menuType="1" :menuModel="menuItems" :allOpen="true"></v-header>
            </div>
        </div>
        <div class="layui-body layui-tab-content" style="bottom:0" :style="readyShowContent?'top:0;left:0;':''">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data (){
      return {
          menuItems:[],
          readyShowContent:false
      }
    },
    methods:{
    },
    created(){
      this.menuItems=window.siteData.MenuItems;
      console.log(this.menuItems)
    }
}
</script>