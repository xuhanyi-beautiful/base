<template>
  <!-- 底部导航 -->
  <div class="btnav">
    <div class="btnav__item btnav__item__title--active">
      <div class="btnav__item__icon iconfont">&#xe7c6;</div>
      <span class="btnav__item__title">首页</span>
    </div>
    <div class="btnav__item">
      <div class="btnav__item__icon iconfont">&#xe649;</div>
      <span class="btnav__item__title">购物车</span>
    </div>
    <div class="btnav__item">
      <div class="btnav__item__icon iconfont">&#xe713;</div>
      <span class="btnav__item__title">订单</span>
    </div>
    <div class="btnav__item">
      <div class="btnav__item__icon iconfont">&#xe639;</div>
      <span class="btnav__item__title">我的</span>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import '../style/variable.scss';
.btnav {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  background-color: $content-fontcolorf;
  &__item {
    flex: 0 0 25%;
    margin-top: 0.07rem;
    text-align: center;
    &__title {
      display: block;
      margin: 0;
      font-size: 0.2rem;
      transform: scale(0.5);
      transform-origin: center top;
      &--active {
        color: #1fa4fc;
      }
    }
    &__icon {
      font-size: 0.2rem;
      margin-bottom: 0.02rem;
    }
  }
}
</style>
