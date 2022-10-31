<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          alt=""
          class="check__icon__img"
        />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__price">
        总计: <span class="check__price__yen">&yen;{{ price }}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'
export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const shopId = route.params.id
    const cartList = store.state.cartList
    const total = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if (productList) {
        for (let i in productList) {
          const product = productList[i]
          count += product.count
        }
      }
      return count
    })
    const price = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if (productList) {
        for (let i in productList) {
          const product = productList[i]
          count += product.count * product.price
        }
      }
      return count.toFixed(2)
    })
    console.log(store.state)
    return { total, price }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  background-color: aqua;
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
