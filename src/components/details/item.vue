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
  </div>
</template>
<script>
    export default {}
</script>
<style lang="less">
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

          .left-bar {
            height: 63px;
            line-height: 63px;
            color: #212121;
            font-size: 18px;
            float: left;

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
            }
          }
        }
    }
</style>
