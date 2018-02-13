<template>
<div class="site">
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
</div>
</template>
<script>
    export default {}
</script>
<style lang="less">
.site {
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
                font-size: 10px;
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
                left: 90px;
            }
            .Note {
                left: 165px;
            }
        }
    }
}
</style>

