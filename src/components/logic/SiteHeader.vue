<template>
  <div class="site-header">
      <div class="home-container">
          <div class="site-category">
              <ul>
                  <li>手机 电话卡<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
                  <li>电视 盒子<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
                  <li>笔记本<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
                  <li>智能 家电<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
                  <li>健康 家居<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
                  <li>出行 儿童<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
                  <li>路由器 手机配件<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
                  <li>移动电源 插线板<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
                  <li>耳机 音箱<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
                  <li>生活 米兔<i class="iconfont icon-iconfonticonfonti2copycopy"></i></li>
              </ul>
          </div>
          <div id="slideshow">
              <img src="http://zero1five.gitee.io/pic/Mi/img/3.jpg" alt="" class="active">
              <img src="http://zero1five.gitee.io/pic/Mi/img/7.jpg" alt="">
              <img src="http://zero1five.gitee.io/pic/Mi/img/8.jpg" alt="">
              <img src="http://zero1five.gitee.io/pic/Mi/img/9.jpg" alt="">
              <div>
                <span class="active"></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
          </div>
      </div>
      <div class="sub-row">
          <div class="sub-list">
              <div><i class="iconfont icon-icon--"></i><p>选购手机</p></div>
              <div><i class="iconfont icon-giftboxlight"></i><p>企业团购</p></div>
              <div><i class="iconfont icon-fabu"></i><p>F码通道</p></div>
              <div><i class="iconfont icon-xiaomi"></i><p>米粉卡</p></div>
              <div><i class="iconfont icon-chaijiufei"></i><p>以旧换新</p></div>
              <div><i class="iconfont icon-shenghuohuafeichongzhi"></i><p>话费充值</p></div>
          </div>
          <img v-lazy="img2[0]" alt="">
          <img v-lazy="img2[1]" alt="">
          <img v-lazy="img2[2]" alt="">
      </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                img1: [
                    'http://zero1five.gitee.io/pic/Mi/img/3.jpg',
                    'http://zero1five.gitee.io/pic/Mi/img/7.jpg',
                    'http://zero1five.gitee.io/pic/Mi/img/8.jpg',
                    'http://zero1five.gitee.io/pic/Mi/img/9.jpg'
                ],
                img2: [
                    'http://zero1five.gitee.io/pic/Mi/img/4.jpg',
                    'http://zero1five.gitee.io/pic/Mi/img/5.jpg',
                    'http://zero1five.gitee.io/pic/Mi/img/6.jpg'
                ]                
            }
        }
    }
</script>
<style lang="less">
    .site-header {
        width: 63%;
        height: 100%;
        margin: 0 auto;
        
        .home-container {
            position: relative;
            .site-category {
                width: 235px;
                height: 460px;
                background: rgba(0, 0, 0, .7);
                position: relative;
                z-index: 1;

                ul{
                    width: 235px;
                    height: 460px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    li {
                        height: 42px;
                        color: #fff;
                        font-size: 13px;
                        padding-left: 31px;
                        line-height: 42px;
                        width: 100%;
                        cursor: pointer;
                        &:nth-child(1) {
                            margin-top: 20px;
                        }
                        &:hover {
                            background: #ff6700;
                        }
                        i {
                            float: right;
                            padding-right: 21px;
                            color: #c5c5c5;
                        }
                    }
                }
            }
            #slideshow {
                height: 460px;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        .sub-row {
            height: 170px;
            width: 100%;
            margin-top: 14px;

            .sub-list {
                width: 235px;
                height: 170px;
                background: #5f5750;
                display: inline-block;
                
                div {
                    color: #cfcdcb;
                    font-size: 13px;
                    padding-top: 20px;
                    width: 33.333%;
                    height: 85px;
                    text-align: center;
                    float: left;
                    border-bottom: 1px solid #665e57;
                    cursor: pointer;
                    &:hover {
                        color: #fff;
                    }
                    p {
                        padding-top: 5px;
                    }
                    i {
                        font-size: 18px;
                    }
                }
            }
            img {
                width: 316px;
                height: 170px;
                margin: 0 auto;
                float: right;
                padding-left: 10px;
                margin-left: 5px;
                cursor: pointer;
                transition:  all .3s;
                &:hover {
                   box-shadow:0 20px 10px -10px rgba(0,0,0,.22);
                }
            }
        }
    }
    #slideshow img{
        width: 100%;
        height: 100%;
        position: absolute; 
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 1s linear;
    }
    #slideshow img.active{
        opacity: 1;
    }
    #slideshow div{
        width: 100px;
        position: absolute;
        bottom: 10px;
        right: 20px;
        text-align: center;
    }
    #slideshow span{
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%; 
        margin: 0 3px;  
        background: #016b89;
        cursor: pointer;
    }
    #slideshow span.active{
        background: #67d1ef;
    }
    .MI {
        font-size: 32px;
    }
</style>

