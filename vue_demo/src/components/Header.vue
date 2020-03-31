<template>
  <el-container>
    <div class="wrap">
        <el-row>
            <el-col :span="5"><h1 class="logo"><a>logo</a></h1></el-col>
            <el-col :span="12">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1"><router-link :to="{path:'/'}"> 发现音乐</router-link></el-menu-item>
                    <el-menu-item index="2"><router-link :to="{path:'/About'}">我的音乐</router-link> </el-menu-item>
                    <el-menu-item index="3" ><router-link :to="{path:'/Friend'}">朋友</router-link></el-menu-item>
                    <el-menu-item index="4"><router-link :to="{path:'/Shop'}">商城</router-link></el-menu-item>
                    <el-menu-item index="5"><router-link :to="{path:'/Music'}">音乐人</router-link> </el-menu-item>
                    <el-menu-item index="6"><router-link :to="{path:'/Down'}">下载客户端</router-link></el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="7">
                <el-row :gutter="10">
                    <el-col :span="16">
                        <el-input v-model="input" placeholder="音乐/视频/电台/用户"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-button>创作者中心</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
        activeIndex: '1',
        input: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.$store.dispatch('activeHand', key)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .el-container{
        position: relative;
        z-index: 1000;
        height: 70px;
        box-sizing: border-box;
        background: #242424;
        border-bottom: 1px solid #000;
        .logo{
            width: 176px;
            height: 69px;
            background:url(../assets/topbar.png) no-repeat 0 0;
            a{
                display: block;
                width: 157px;
                height: 100%;
                padding-right: 20px;
                text-indent: -9999px;
            }
        }
        .el-menu.el-menu--horizontal {
            border-bottom: solid 1px transparent;
        }
        .el-menu {
            border-right: solid 1px transparent;
            list-style: none;
            position: relative;
            margin: 0;
            padding-left: 0;
            background-color: transparent;
        }
        .el-menu--horizontal>.el-menu-item {
            float: left;
            height: 69px;
            line-height: 69px;
            margin: 0;
            border-bottom: 2px solid transparent;
            color: #fff;
        }
        .el-menu--horizontal>.el-menu-item.is-active {
            border-bottom: 2px solid #409EFF;
            color: #fff;
        }
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, 
        .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
            background-color: #000;
        }
        
        .el-button{
            margin-top: 15px;
            border-radius: 20px;
            color: #fff;
            background: none;
        }
    }
</style>
