<template>
  <div class="star-goods">
      <h2>小米明星单品</h2>
      <div class="goods">
          <ul>
              <li class="rainbow" v-for="item in goodsData">
                  <router-link tag="img" v-lazy="item.goods_pic" to="/item"></router-link>
                  <p class="goods-title">{{item.goods_title}}</p>
                  <p class="goods-desc">{{item.goods_desc}}</p>
                  <p class="goods-price">{{item.goods_price}}元</p>
                  <div 
                    class="add" 
                    @click="addGoods(item),openHTML(item.goods_title)
                    showClose = true
                    "><p>加入购物车</p>
                  </div>                  
              </li>                                                         
          </ul>
      </div>
  </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                goodsData: [],
            }
        },
        created () {
            axios({
                method: 'get',
                url: ' https://easy-mock.com/mock/5a820aff9855f809bedc1ec0/xiaomi/goods'
            })
            .then((res) => {
                console.log(res.data);
                this.goodsData = res.data;
            })
            .catch((error) => {
                console.log('请求数据失败' + error);
            })
        },
        methods: {
            addGoods(data) {
                this.$store.commit('addPanelData',data);
            },
            openHTML(title) {
                this.$message({
                showClose: true,
                duration: 2000,
                iconClass: 'iconfont icon-gouwuchekong',
                message: ' ' + title + ' 已加入购物车'
                });
            }
        }
    }
</script>
<style lang="less">
    .el-message {
        color: #fcebbf;
        background: #c9060e;
    }
    .star-goods {
        width: 63%;
        height: 100%;
        margin: 26px auto;
        h2 {
            height: 58px;
            line-height: 58px;
            font-size: 22px;
            font-weight: 200;
            color: #333;
        }
        .goods {
            width: 100%;
            height: 340px;
            
            .rainbow {
                height: 300px;
                padding-top: 39px;
                border-top-width: 1px;
                border-top-style: solid;
                text-align: center;
                background: #fafafa;
                -webkit-transition: all .6s;
                transition: all .6s;
                width: 18.3%;
                float: left;
                margin-right: 14px;
                position: relative;
                cursor: pointer;
                &:nth-child(1) {
                    border-top: 1px solid #ffac13;
                }
                &:nth-child(2) {
                    border-top: 1px solid #83c44e;
                }     
                &:nth-child(3) {
                    border-top: 1px solid #2196f3;
                }     
                &:nth-child(3) {
                    border-top: 1px solid #2196f3;
                }  
                &:nth-child(4) {
                    border-top: 1px solid #e53935;
                }      
                &:nth-child(5) {
                    border-top: 1px solid #00c0a5;
                }
                &:hover {
                    box-shadow:0 0 25px 0px rgba(0,0,0,0.22);
                    .add {
                        bottom: 0;
                        opacity: 1;
                    }
                }
                img {
                    width: 160px;
                    height: 160px;
                }
                .goods-title {
                    font-size: 14px;
                    color: #212121;
                    margin: 0 20px 3px;
                }
                .goods-desc {
                    font-size: 10px;
                    color: #b0b0b0;
                    margin: 0 20px 12px;
                }
                .goods-price {
                    color: #ff6709;
                    font-size: 13px;
                    font-weight: 600;
                }
                .add {
                    width: 100%;
                    height: 36px;
                    background: #ff6700;
                    position: absolute;
                    bottom: -36px;
                    opacity: 0;
                    transition: all .4s;
                    left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 15px;
                    color: #fff;

                    &:hover {
                        background: #f25807;
                    }
                }
            }
        }
    }
</style>
