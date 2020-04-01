<template>
  <div class="home">
    <div class="carousel">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.src" >
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="wrap">
      <div class="main">
        <div class="left">
          <ContentItem title="热门推荐">
            <div slot="card">
              <el-row>
                <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                      <span>好吃的汉堡</span>
                      <div class="bottom clearfix">
                        <el-button type="text" class="button">操作按钮</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </ContentItem>
          <ContentItem title="新碟上架">
            <div slot="carousel">
              <el-carousel indicator-position="outside" :autoplay="false" trigger="click" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </ContentItem>
          <ContentItem title="榜单">
            <div slot="list">
              <ul>
                <li>1111</li>
                <li>222</li>
                <li>333</li>
                <li>444</li>
              </ul>
            </div>
          </ContentItem>
        </div>
        <div class="aside"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentItem from '@/components/ContentItem.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      imgList:[{src:require('../assets/1.jpg')},{src:require('../assets/2.jpg')},{src:require('../assets/3.jpg')},{src:require('../assets/4.jpg')}]
    }
  },
  components: {
    ContentItem
  }
}
</script>
<style lang="less" scoped>
  .carousel{
    background-image: url(http://p1.music.126.net/vZcz1oPWr6enynxCOVHbyQ==/109951164858017635.jpg?imageView&blur=40x20);
    background-size: 6000px;
    background-position: center center;
    
    .el-carousel__item{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .wrap{
      width: 1100px;
      margin: 0 auto;
      border: 1px solid #d3d3d3;
      border-top: 0;
      border-bottom:0;
      .left{
        width: 729px;
        .time {
          font-size: 13px;
          color: #999;
        }
        
        .bottom {
          margin-top: 13px;
          line-height: 12px;
        }

        .button {
          padding: 0;
          float: right;
        }

        .image {
          width: 100%;
          display: block;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        
        .clearfix:after {
            clear: both
        }
      }
      .aisde{
        width: 250px;
      }
      
  }
</style>
