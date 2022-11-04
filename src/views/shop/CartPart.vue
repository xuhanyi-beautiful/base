<template>
  <div class="mask" v-if="showCartInfo" @click="changeShowCartInfo()"></div>
  <div class="showCartList" v-if="showCartInfo">
    <div class="showCartList__header">
      <div class="showCartList__header__all">
        <span
          class="iconfont showCartList__header__all__icon"
          v-html="checkedAll ? '&#xe69b;' : '&#xe619;'"
          @click="changeCartAllState(checkedAll, shopId)"
        >
        </span>
        全选
      </div>
      <div class="showCartList__header__clear" @click="clearCartList">
        清空购物车
      </div>
    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="item in checkedCartList"
        :key="item._id"
      >
        <span
          class="iconfont product__item__icon"
          v-html="item.checked ? '&#xe69b;' : '&#xe619;'"
          @click="changeCartItemState(shopId, item._id)"
        ></span>
        <div class="product__item__content">
          <img class="product__item__content__img" :src="item.imgUrl" alt="" />
          <div class="product__item__content__text">
            <h4 class="product__item__content__text__title">{{ item.name }}</h4>
            <p class="product__item__content__text__price">
              <span class="price__yen">&yen;{{ item.price }}</span>
              <span class="price__origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
        </div>
        <div class="product__item__count">
          <span
            class="iconfont product__item__count__minus"
            @click="
              () => {
                changeCartCount(item._id, -1)
              }
            "
            >&#xe677;</span
          >
          <span class="product__item__count__num">{{ item.count }}</span>
          <span
            class="iconfont product__item__count__add"
            @click="
              () => {
                changeCartCount(item._id, 1)
              }
            "
            >&#xe661;</span
          >
        </div>
      </div>
    </div>
  </div>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          alt=""
          class="check__icon__img"
          @click="changeShowCartInfo()"
        />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__price">
        总计: <span class="check__price__yen">&yen;{{ price }}</span>
      </div>
      <router-link to="/"><div class="check__btn">去结算</div></router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const shopId = route.params.id
    const cartList = store.state.cartList
    // 计算总数
    const total = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if (productList) {
        for (let i in productList) {
          const product = productList[i]
          if (product.checked) {
            count += product.count
          }
        }
      }
      return count
    })
    // 计算价格
    const price = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if (productList) {
        for (let i in productList) {
          const product = productList[i]
          if (product.checked) {
            count += product.count * product.price
          }
        }
      }
      return count.toFixed(2)
    })
    let showCartInfo = ref(false)
    const checkedCartList = computed(() => {
      return cartList[shopId]
    })
    const changeShowCartInfo = () => {
      showCartInfo.value = !showCartInfo.value
    }

    // 发送修改数据请求
    const changeCartCount = (productId, num) => {
      store.commit('addItemToCart', { shopId, productId, num })
    }
    // 清空购物车
    const clearCartList = () => {
      store.commit('clearCartList', { shopId })
    }
    // 修改item勾选状态
    const changeCartItemState = (shopId, productId) => {
      store.commit('changeCartItemState', { shopId, productId })
    }
    // 修改all勾选状态
    const checkedAll = computed(() => {
      let count = 0
      let sum = 0
      for (let i in store.state.cartList[shopId]) {
        sum++
        if (store.state.cartList[shopId][i].checked) {
          count++
        }
      }
      return count++ === sum++
    })
    const changeCartAllState = (checkedAll, shopId) => {
      store.commit('changeCartAllState', { checkedAll, shopId })
    }

    return {
      total,
      price,
      showCartInfo,
      changeShowCartInfo,
      checkedCartList,
      changeCartCount,
      clearCartList,
      changeCartItemState,
      shopId,
      checkedAll,
      changeCartAllState
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.showCartList {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  height: 1.93rem;
  background: #fff;
  z-index: 2;
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 0 0.18rem;
    height: 0.52rem;
    line-height: 0.52rem;
    border-bottom: 1px solid #f1f1f1;
    &__clear {
      font-size: 0.14rem;
      color: #333;
    }
    &__all {
      font-size: 0.14rem;
      color: #333;
      &__icon {
        position: relative;
        top: -0.01rem;
        margin-right: 0.08rem;
        color: #0091ff;
        font-size: 0.19rem;
        vertical-align: middle;
      }
    }
  }
  .product {
    height: 1.4rem;
    overflow-y: scroll;
    padding: 0 0.18rem;
    &__item {
      display: flex;
      height: 0.7rem;
      &__icon {
        line-height: 0.7rem;
        margin-right: 0.16rem;
        color: #0091ff;
        font-size: 0.19rem;
      }
      &__content {
        display: flex;
        width: 1.8rem;
        height: 0.7rem;
        &__img {
          margin-top: 0.12rem;
          margin-right: 0.12rem;
          width: 0.46rem;
          height: 0.46rem;
        }
        &__text {
          flex: 1;
          height: 100%;
          &__title {
            margin: 0.14rem 0 0.1rem 0;
            font-size: 14px;
            color: #333333;
          }
          &__price {
            margin: 0;
            font-size: 14px;
            color: #e93b3b;
            .price__yen {
              margin-right: 0.08rem;
            }
            .price__origin {
              font-size: 10px;
              color: #999999;
              text-decoration: line-through;
            }
          }
        }
      }
      &__count {
        flex: 1;
        line-height: 0.7rem;
        text-align: center;
        &__minus {
          font-size: 0.2rem;
        }
        &__num {
          display: inline-block;
          position: relative;
          top: -0.02rem;
          width: 0.3rem;
          font-size: 0.14rem;
        }
        &__add {
          font-size: 0.2rem;
          color: #0091ff;
        }
      }
    }
  }
}
.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: 0.3);
  z-index: 1;
}
.cart {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  background: #fff;
  border-top: 1px solid #f1f1f1;
  z-index: 2;
}
.check {
  display: flex;
  height: 0.5rem;
  line-height: 0.5rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    height: 100%;
    text-align: center;
    &__img {
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      left: 0.5rem;
      top: -0.02rem;
      padding: 0 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      text-align: center;
      background-color: #e93b3b;
      border-radius: 0.1rem;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left bottom;
    }
  }
  &__price {
    flex: 1;
    color: #333;
    height: 0.5rem;
    &__yen {
      position: relative;
      top: 0.02rem;
      margin-left: 0.05rem;
      font-weight: 600;
      font-size: 0.18rem;
      color: #e93b3b;
    }
  }
  &__btn {
    width: 0.98rem;
    height: 0.5rem;
    text-align: center;
    font-size: 0.14rem;
    color: #fff;
    background-color: #4fb0f9;
  }
}
</style>
