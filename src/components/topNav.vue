<template>
  <div class="top-nav">
      <div class="top-nav-content">
          <div class="left-nav">
              <ul>
                  <li>小米商城</li>
                  <li>MIUI</li>
                  <li>loT</li>
                  <li>云服务</li>
                  <li>水滴</li>
                  <li>金融</li>
                  <li>有品</li>
                  <li>Select Region</li>
              </ul>
          </div>
          <div class="right-nav">
              <li>登录</li>
              <li>注册</li>
              <li>消息通知</li>
              <span id="shop_cart" 
                :class="{'cart-num':count>0}"
                @mouseenter="showCarHandle"
                class="ball-rect"
                ><i class="iconfont icon-gouwuchekong"></i> 购物车（{{count}}）</span>

              <div class="cart-container" v-if="carShow" @mouseleave="hideCarHandle">
                <!-- 无商品时的购物车 -->
                <div class="cart_tips" v-if="count<=0">
                    <i class="iconfont icon-gouwuchekong"></i>
                    <p>购物车中还没有商品，赶紧选购吧！</p>
                </div>
                <!-- 有商品时的购物车 -->
                <div class="shop_cart_content" id="shop_cart_content" v-else @mouseleave="hideCarHandle">
                    <!-- 购物车每项 -->
                    <div class="shelf" v-for="item, index in carPanelData">
                        <img :src="item.goods_pic">
                        <span>{{item.goods_title}}</span>
                        <span>￥{{item.goods_price}} x {{item.count}} <i class="iconfont icon-quxiao" @click="delCarPanelHandel(item.goods_id)"></i></span>
                    </div>
                    <!-- 购物车计算 -->
                    <div class="shop_cart_count">
                        <span>共 {{count}} 件商品</span>
                        <p>{{totle}}元</p>
                        <div>去购物车结算</div>
                    </div>                                             
                </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
    export default {
        computed: {
            carPanelData() {
                return this.$store.state.carPanelData
            },
            count() {
                return this.$store.getters.totleCount
            },
            totle() {
                return this.$store.getters.totlePrice
            },
            carShow() {
                return this.$store.state.carShow
            },
            ball() {
                return this.$store.state.ball
            }
        },
        methods: {
            delCarPanelHandel(id) {
                this.$store.commit('delCarPanelData',id)
            },
            showCarHandle() {
                this.$store.commit('showCar')
            },
            hideCarHandle() {
                this.$store.commit('hideCar')
            },
        }
    }
</script>
<style lang='less'>
    .addcart-mask .mask-item {
        pointer-events: none;
        width: 32px;
        height: 32px;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 3px 8px rgba(0,0,0,.1);
        background-size: contain;
        transform: translate3d(0,0,0);
        position: relative;
        z-index: 99;
    }
    .ball-enter-active {
        transition: 1s cubic-bezier(.15,.69,.6,1.29);
    }
    .ball-enter-active .mask-item {
        transition: 1s cubic-bezier(0,0,1,1);
    }
    .top-nav {
        width: 100%;
        height: 40px;
        background: #333;
        
        .top-nav-content {
            width: 65%;
            height: 100%;
            margin: 0 auto;
            padding: 0 15px;
            line-height: 40px;
            color: #b0b0b0;
            font-size: 12px;
            position: relative;

            li {
                padding: 0 8px;
                height: 12px;
                margin-top: 15px;
                margin-bottom: 15px;
                line-height: 12px;
                border-right: 1px solid #393f3f;
                cursor: pointer;
                &:hover {
                    color: #fff;
                }                
            }
            .left-nav {
                float: left;

                li {
                    float: left;
                    &:nth-child(8){
                        border: none;
                    }
                }
            }
            .right-nav {
                position: absolute;
                right: 20px;
                li {
                    float: left;
                    list-style: none;
                    &:nth-child(3){
                        padding-right: 25px;
                    } 
                }
                /* bind 绑定 颜色变化的 class */
                .cart-num {
                    color: #ff6700;
                }
                /* 购物车选项 */
                #shop_cart {
                    height: 40px;
                    display: inline-block;
                    padding: 0 10px;
                    background: #424242;
                    cursor: pointer;
                    &:hover {
                        background: #fff;
                        color: #ff6700;
                    }
                }
                .shop_cart_content,.cart_tips {
                    width: 315px;
                    position: absolute;
                    z-index: 1;
                    left: -45px;
                    background: #fff;
                    box-shadow:0 0 10px 0px rgba(0,0,0,.22);
                    opacity: 1;
                    transition: all .3s;

                    .shelf {
                        zoom:1;
                        color: rgb(59, 59, 59);
                        border-bottom: 1px dashed #eee;
                        &::after {
                            clear:both;
                            content:'.';
                            display:block;
                            width: 0;
                            height: 0;
                            visibility:hidden;
                        }
                        .icon-quxiao {
                            font-size: 13px;
                            padding-left: 10px;
                            cursor: pointer;
                            &:hover {
                                color: #111;
                            }
                        }
                        img {
                            width: 60px;
                            height: 60px;
                            float: left;
                            margin: 10px;
                        }
                        span {
                            float: left;
                            padding-top: 22px;
                            font-size: 12px;
                            line-height: 17px;
                            width: 100px;

                            &:nth-child(2):hover {
                                color: #ff6700;
                                cursor: pointer;
                            }
                            &:nth-child(3) {
                                float: right;
                            }
                        }
                    }
                    .shop_cart_count {
                        width: 100%;
                        height: 75px;
                        background: #fafafa;

                        p,span {
                            position: absolute;
                        }
                        span {
                            margin: 5px 0 0 25px;
                            font-size: 13px;
                        }
                        p {
                            font-size: 20px;
                            color: #ff6700;
                            margin: 30px 0 0 25px;
                        }
                        div {
                            float: right;
                            width: 132px;
                            height: 40px;
                            margin: 17.5px 17px 0 0;
                            background: #ff6700;
                            color: #f5f5f5;
                            font-size: 14px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                        }
                    }                    
                }
                /* vue */
                .cart_tips {
                    height: 90px;
                    text-align: center;
                    background: #fff;
                    line-height: 50px;
                    box-shadow: 0 0 3px 0px rgba(0,0,0,.22);

                    i {
                        font-size: 30px;
                    }
                    p {
                        line-height: 12px;
                    }
                }
            }
        }
    }
    @media (max-width: 1200px) {
        .top-nav-content {
            width: 90%!important;
        }
    }
</style>

