<template>
  <div class="wrapper">
    <div class="header">我的订单</div>
    <div class="shoplist">
      <h4 class="shoplist__title">
        沃尔玛<span class="shoplist__title__state">已取消</span>
      </h4>
      <div class="shoplist__order">
        <div class="shoplist__order__item">
          <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" />
          <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" />
          <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" />
          <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" />
        </div>
        <div class="shoplist__order__total">
          <p>¥66.69</p>
          共6件
        </div>
      </div>
    </div>
    <div class="shoplist">
      <h4 class="shoplist__title">
        沃尔玛<span class="shoplist__title__state">已取消</span>
      </h4>
      <div class="shoplist__order">
        <div class="shoplist__order__item">
          <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" />
          <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" />
          <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" />
          <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" />
        </div>
        <div class="shoplist__order__total">
          <p>¥66.69</p>
          共6件
        </div>
      </div>
    </div>
  </div>

  <BtNav />
</template>
<script setup>
import BtNav from '@/components/BtNav.vue'
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.44rem;
  bottom: 0.5rem;
  padding: 0 0.18rem;
  background: #f5f5f5;
  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0.44rem;
    line-height: 0.44rem;
    height: 0.44rem;
    background-color: #fff;
    text-align: center;
    font-size: 0.16rem;
    color: #333333;
  }
  .shoplist {
    margin-top: 0.16rem;
    padding: 0 0.16rem;
    background-color: #fff;
    padding-bottom: 0.16rem;
    &__title {
      display: flex;
      justify-content: space-between;
      margin: 0;
      height: 0.54rem;
      line-height: 0.54rem;
      font-size: 0.16rem;
      &__state {
        font-weight: normal;
        font-size: 14px;
        color: #999999;
      }
    }
    &__order {
      display: flex;
      justify-content: space-between;
      height: 0.56rem;
      &__item {
        img {
          width: 0.4rem;
          height: 0.4rem;
          margin-right: 0.12rem;
        }
      }
      &__total {
        text-align: right;
        font-size: 12px;
        color: #333333;
        p {
          padding-bottom: 0.1rem;
          font-size: 14px;
          color: #e93b3b;
          margin: 0;
        }
      }
    }
  }
}
</style>
