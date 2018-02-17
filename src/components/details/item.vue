<template>
  <div class="item-details">
    <div class="nav-bar">
      <div class="nav-bar-container">
        <div class="left-bar">
          小米MIX 2 全面屏2.0 <span>| 小米MIX 2 斯塔克限量版</span>
        </div>
        <div class="right-bar">
          <ul>
            <li>概述</li>
            <li>图集</li>
            <li>参数</li>
            <li>创意海报</li>
            <li>F码通道</li>
            <li>用户评价</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="details-content">
      <div class="details-img">
        <div class="block">
          <el-carousel trigger="click" height="560px" interval="3500">
            <el-carousel-item v-for="item in imgs" :key="item">
              <img :src="item" >
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="details-text">
        <h2>小米MIX 2 全面屏2.0</h2>
        <small>『 8+ 128GB直降400元，6+128GB直降200元，6+64GB直降300元 』 <span>全面屏2.0，5.99"大屏 / 晓龙835旗舰处理器 / 4轴光学防抖 / 6模43频，全球频段</span></small>
        <p class="price">2999元</p>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>

    export default {
      data () {
        return {
          imgs: [
                  'http://zero1five.gitee.io/pic/Mi/img/15.jpg',
                  'http://zero1five.gitee.io/pic/Mi/img/16.jpg',
                  'http://zero1five.gitee.io/pic/Mi/img/17.jpg',
                ]
        }
      },
    }
</script>
<style lang="less">
    .el-carousel__button {
      background: #616161;
    }
    .nav-bar {
      color: #616161;
      height: 63px;
      background: #fff;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      box-shadow: 0px 5px 5px rgba(0,0,0,0.07);
      width: 100%;

        .nav-bar-container {
          width: 63%;
          margin: 0 auto;
          zoom: 1;
          position: relative;
          &:after {
            clear:both;
            content:'.';
            display:block;
            width: 0;
            height: 0;
            visibility:hidden;

          }
          .left-bar {
            height: 63px;
            line-height: 63px;
            color: #212121;
            font-size: 18px;
            position: absolute;
            left: 0;
            

            span {
              font-size: 13px;
              color: #616161;
              &:hover {
                color: #ff6700;
              }
            }
          }
          .right-bar {
            float: right;
            li {
              display: inline-block;
              color: #616161;
              font-size: 13px;
              margin-top: 20px;
              height: 14px;
              padding: 0 7px;
              border-right: 1px solid #e0e5ec;

              &:nth-child(6) {
                border: none;
              }
              &:hover {
                color: #ff6700;
              }
            }
          }
        }
    }
    .details-content {
      width: 63%;
      margin: 0 auto;
      zoom: 1;
      position: relative;
      padding-top: 32px;
      &:after {
        clear:both;
        content:'.';
        display:block;
        width: 0;
        height: 0;
        visibility:hidden;
      }

      .details-img {
        width: 560px;
        height: 560px;
        float: left;
      }
      .details-text {
        padding-left: 20px;
        h2 {
          font-size: 21px;
          color: #212121;
          padding-bottom: 5px;
        }
        small {
          color: #ff4a00;
          font-size: 13px;
          padding-bottom: 5px;
          span {
            color: #b7b0b7;
          }
        }
        .price {
          padding: 15px 0;
          font-size: 17px;
          color: #ff6700;
          font-weight: 300;
        }
      }
    }
</style>
