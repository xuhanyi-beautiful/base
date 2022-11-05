<template>
  <div class="wrapper">
    <div class="header">
      我的全部购物车<span class="header__count">(2)</span>
    </div>
    <div class="shoplist">
      <h4 class="shoplist__title">沃尔玛</h4>
      <div class="shoplist__product">
        <div class="shoplist__product__item">
          <img
            class="shoplist__product__item__img"
            src="http://www.dell-lee.com/imgs/vue3/tomato.png"
            alt=""
          />
          <div class="shoplist__product__item__content">
            <div class="shoplist__product__item__content__title">
              番茄250g/份
            </div>
            <div class="shoplist__product__item__content__price">
              <span class="shoplist__product__item__content__price__singleprice"
                >￥33.6 x 9</span
              >
              <span class="shoplist__product__item__content__price__totalprice"
                >￥99.9</span
              >
            </div>
          </div>
        </div>
        <div class="shoplist__product__item">
          <img
            class="shoplist__product__item__img"
            src="http://www.dell-lee.com/imgs/vue3/tomato.png"
            alt=""
          />
          <div class="shoplist__product__item__content">
            <div class="shoplist__product__item__content__title">
              番茄250g/份
            </div>
            <div class="shoplist__product__item__content__price">
              <span class="shoplist__product__item__content__price__singleprice"
                >￥33.6 x 9</span
              >
              <span class="shoplist__product__item__content__price__totalprice"
                >￥99.9</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="shoplist__total">共计3件/1.4kg</div>
    </div>
    <div class="shoplist">
      <h4 class="shoplist__title">京东7FRESH七鲜</h4>
      <div class="shoplist__product">
        <div class="shoplist__product__item">
          <img
            class="shoplist__product__item__img"
            src="http://www.dell-lee.com/imgs/vue3/tomato.png"
            alt=""
          />
          <div class="shoplist__product__item__content">
            <div class="shoplist__product__item__content__title">
              番茄250g/份
            </div>
            <div class="shoplist__product__item__content__price">
              <span class="shoplist__product__item__content__price__singleprice"
                >￥33.6 x 9</span
              >
              <span class="shoplist__product__item__content__price__totalprice"
                >￥99.9</span
              >
            </div>
          </div>
        </div>
        <div class="shoplist__product__item">
          <img
            class="shoplist__product__item__img"
            src="http://www.dell-lee.com/imgs/vue3/tomato.png"
            alt=""
          />
          <div class="shoplist__product__item__content">
            <div class="shoplist__product__item__content__title">
              番茄250g/份
            </div>
            <div class="shoplist__product__item__content__price">
              <span class="shoplist__product__item__content__price__singleprice"
                >￥33.6 x 9</span
              >
              <span class="shoplist__product__item__content__price__totalprice"
                >￥99.9</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shoplist">
      <h4 class="shoplist__title">京东7FRESH七鲜</h4>
      <div class="shoplist__product">
        <div class="shoplist__product__item">
          <img
            class="shoplist__product__item__img"
            src="http://www.dell-lee.com/imgs/vue3/tomato.png"
            alt=""
          />
          <div class="shoplist__product__item__content">
            <div class="shoplist__product__item__content__title">
              番茄250g/份
            </div>
            <div class="shoplist__product__item__content__price">
              <span class="shoplist__product__item__content__price__singleprice"
                >￥33.6 x 9</span
              >
              <span class="shoplist__product__item__content__price__totalprice"
                >￥99.9</span
              >
            </div>
          </div>
        </div>
        <div class="shoplist__product__item">
          <img
            class="shoplist__product__item__img"
            src="http://www.dell-lee.com/imgs/vue3/tomato.png"
            alt=""
          />
          <div class="shoplist__product__item__content">
            <div class="shoplist__product__item__content__title">
              番茄250g/份
            </div>
            <div class="shoplist__product__item__content__price">
              <span class="shoplist__product__item__content__price__singleprice"
                >￥33.6 x 9</span
              >
              <span class="shoplist__product__item__content__price__totalprice"
                >￥99.9</span
              >
            </div>
          </div>
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
    margin: 0 -0.18rem;
    background-color: #fff;
    text-align: center;
    font-size: 0.16rem;
    color: #333333;
    &__count {
      margin-left: 0.06rem;
    }
  }
  .shoplist {
    margin-top: 0.16rem;
    padding: 0 0.16rem;
    background-color: #fff;
    padding-bottom: 0.16rem;
    &__title {
      margin: 0;
      height: 0.54rem;
      line-height: 0.54rem;
      font-size: 0.16rem;
    }
    &__product {
      &__item {
        display: flex;
        margin-top: 0.16rem;
        height: 0.46rem;
        &__img {
          width: 0.46rem;
          height: 0.46rem;
          margin-right: 0.16rem;
        }
        &__content {
          flex: 1;
          &__title {
            margin-bottom: 0.15rem;
            font-weight: 600;
            font-size: 0.14rem;
            color: #333;
          }
          &__price {
            display: flex;
            justify-content: space-between;
            font-size: 0.14rem;
            &__singleprice {
              color: #e93b3b;
            }
          }
        }
      }
    }
    &__total {
      margin-top: 0.16rem;
      background: #f5f5f5;
      height: 0.28rem;
      line-height: 0.28rem;
      text-align: center;
      font-size: 0.14rem;
      color: #999999;
    }
  }
}
</style>
