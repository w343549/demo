<template>
  <div class="hello">
    <div class="con-item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{title}}</span>
          <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </div>
        <slot name="card"></slot>
        <slot name="carousel"></slot>
        <slot name="list"></slot>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello{
    padding-bottom: 35px;
    .con-item{
      margin-bottom: 35px;
    }
    .con-item:last-child{
      margin-bottom: 0;
    }
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 100%;
    }
  }
  
  
</style>
