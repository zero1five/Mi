<template>
  <div class="site-header">
      <div class="container">
          <ul>
              <li><i class="iconfont icon-xiaomi MI"></i></li>
              <li><img src="http://zero1five.gitee.io/pic/Mi/img/1.gif"></li>
              <li>小米手机</li>
              <li>红米</li>
              <li>电视</li>
              <li>笔记本</li>
              <li>盒子</li>
              <li>新品</li>
              <li>路由器</li>
              <li>智能硬件</li>
              <li>服务</li>
              <li>社区</li>
          </ul>
          <div class="search">
              <input type="text" autocomplete="off" id="search">
              <div class="div-icon" id="div_icon"><i class="iconfont icon-fangdajing"></i></div>
              <div id="showHot">
                <div class="Plus">
                    红米5 Plus
                </div>
                <div class="Note">
                    小米Note 3 
                </div>
              </div>
          </div>
      </div>
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
          <img src="http://zero1five.gitee.io/pic/Mi/img/4.jpg" alt="">
          <img src="http://zero1five.gitee.io/pic/Mi/img/5.jpg" alt="">
          <img src="http://zero1five.gitee.io/pic/Mi/img/6.jpg" alt="">
      </div>
  </div>
</template>
<script>
    export default {}
</script>
<style lang="less">
    .site-header {
        width: 63%;
        height: 100%;
        margin: 0 auto;

        .container {
            height: 100px;
            position: relative;

            ul {
                width: 100%;
                margin: 22.5px 0;
            }
            li {
                float: left;
                display: block;
                line-height: 55px;
                padding: 0 10px;
                color: #333333;
                cursor: pointer;
                font-size: 16px;
                font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
                &:nth-child(1) {
                    width: 55px;
                    height: 55px;
                    background: #ff6700;
                    font-size: 22px;
                    color: #fff;
                    text-align: center;
                }
                &:hover {
                    color: #ff6700;
                }
                &:nth-child(1):hover {
                    color: #d3ceca;
                }
            }
            .search {
                width: 295px;
                height: 50px;
                position: absolute;
                right: 0;
                top: 0;

                input {
                    position: absolute;
                    top: 0;
                    right: 51px;
                    width: 250px;
                    height: 50px;
                    padding: 0 10px;
                    border: 1px solid #e0e0e0;
                    font-size: 14px;
                    line-height: 48px;
                    outline: 0;
                    transition: all .3s;

                    &:focus {
                        border: 1px solid #ff6700;
                    }
                }
                .div-icon {
                    top: 0;
                    z-index: 2;
                    width: 52px;
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    font-size: 40px;
                    line-height: 30px;
                    background: #fff;
                    text-align: center;
                    color: #616161;
                    outline: 0;
                    float: right;
                    cursor: pointer;
                    transition: all .3s;
                    &:hover {
                        background: #ff6700;
                        color: #fff;
                    }
                }
                #showHot {
                    transition: all .3s;
                }
                .Plus,.Note {
                    font-size: 8px;
                    color: #757575;
                    padding: 2px 3px;
                    background: #eee;
                    position: absolute;
                    top: 15px;
                    cursor: pointer;
                    transition: all .3s;
                    &:hover {
                        background: #ff6700;
                        color: #fff;
                    }                    
                }
                .Plus {
                    left: 105px;
                }
                .Note {
                    left: 175px;
                }
            }
        }
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
    @media (max-width: 1200px) {
        .site-header,.star-goods {
            width: 90%!important;
        }
        .sub-row {
            img {
                width: 210px!important;
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

