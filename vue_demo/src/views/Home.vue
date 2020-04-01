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
                <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 0">
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
            <div class="newImg" slot="carousel">
              <el-carousel :autoplay="false" trigger="click" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                 <el-row>
                    <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 0">
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
        <div class="aside">
          <div class="aside-con">
            <div class="download"></div>
          </div>
        </div>
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
      position: relative;
      width: 990px;
      margin: 0 auto;
      border: 1px solid #d3d3d3;
      border-top: 0;
      border-bottom:0;
      .left{
        width: 730px;
        border-right:1px solid #d3d3d3;
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
        .newImg .el-carousel__arrow--left {
            left: 10px !important;
        }
        .newImg .el-carousel__arrow--right {
            right: 10px !important;
        }
      }
      .aside{
        position: absolute;
        top:0;
        right:0;
        width: 250px;
        .aside-con{
          position:relative;
          width: 250px;
          .download{
            position: absolute;
            right:0;
            top: -285px;
            z-index: 20;
            width: 254px;
            height: 285px;
            background: url(../assets/download.png) no-repeat 0 0;
          }
          
        }
      }
      
  }
</style>
