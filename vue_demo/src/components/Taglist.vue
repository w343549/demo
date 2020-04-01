<template>
  <div class="hello">
    <el-container>
      <div class="wrap">
        <ul class="tag-item" v-if="index==1">
          <li>推荐</li>
          <li>排行榜</li>
          <li>歌单</li>
          <li>主播电台</li>
          <li>歌手</li>
          <li>新碟上架</li>
        </ul>
      </div>
    </el-container>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: 'Main',
  computed: {
    ...mapState(['index'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .el-container{
    z-index: 90;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 2px solid #a40011;
    .tag-item{
      width:100%;
      height: 35px;
      text-align: center;
      li{
        display: inline-block;
        margin: 0 20px;
        padding: 0 20px;
        font-size: 12px;
        height: 35px;
        line-height: 35px;
        color: #fff;
      }
    }

  }
  
</style>
