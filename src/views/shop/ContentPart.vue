<template>
  <div class="content">
    <div class="category">
      <div
        v-for="item in categorys"
        :key="item.name"
        :class="{
          category__item: true,
          'category__item--active': current === item.tab
        }"
        @click="() => handleCategoryClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in contentList" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="" />
        <div class="product__item__content">
          <h4 class="purduct__item__title">{{ item.name }}</h4>
          <p class="purduct__item__tag">{{ item.sales }}</p>
          <p class="purduct__item__price">
            <span class="purduct__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__item__count">
          <span
            class="minus"
            @click="
              () => {
                addItemToCart(shopId, item._id, item, -1)
              }
            "
            >-</span
          >
          {{ cartList?.[shopId]?.[item._id]?.count || 0 }}
          <span
            class="plus"
            @click="
              () => {
                addItemToCart(shopId, item._id, item, 1)
              }
            "
            >+</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const addItemToCart = (shopId, productId, productInfo, num) => {
    store.commit('addItemToCart', { shopId, productId, productInfo, num })
  }
  return { cartList, addItemToCart }
}
export default {
  nane: 'ContentPart',
  setup() {
    const { cartList, addItemToCart } = useCartEffect()

    const categorys = [
      { name: '全部商品', tab: 'all' },
      { name: '秒杀', tab: 'seckill' },
      { name: '新鲜水果', tab: 'fruit' }
    ]
    const data = reactive({ contentList: [], current: 'all' })
    const route = useRoute()
    const shopId = route.params.id
    const getContentData = async (tab) => {
      const result = await get(`/api/shop/${shopId}/products`, { tab })
      if (result?.errno === 0 && result?.data.length) {
        data.contentList = result.data
      }
    }
    getContentData('all')
    const { contentList } = toRefs(data)
    const handleCategoryClick = (tab) => {
      getContentData(tab)
      data.current = tab
    }
    const { current } = toRefs(data)
    return {
      contentList,
      current,
      categorys,
      handleCategoryClick,
      cartList,
      shopId,
      addItemToCart
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.49rem;
  .category {
    overflow-y: scroll;
    width: 0.76rem;
    height: 100%;
    background-color: #f5f5f5;
    &__item--active {
      background-color: #fff;
    }
    &__item {
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.14rem;
      color: #333333;
    }
  }
  .product {
    flex: 1;
    overflow-y: scroll;
    height: 100%;

    &__item {
      position: relative;
      display: flex;
      padding-bottom: 0.12rem;
      margin: 0 0.16rem;
      border-bottom: 0.01rem solid #f1f1f1;
      &__img {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.16rem;
      }
      &__content {
        .purduct__item__title {
          margin: 0;
          line-height: 0.2rem;
          font-size: 14px;
          color: #333333;
        }
        .purduct__item__tag {
          margin: 0.06rem 0;
          font-size: 12px;
          color: #333333;
          line-height: 16px;
        }
        .purduct__item__price {
          margin: 0.08rem 0 0 0;
          font-size: 14px;
          color: #e93b3b;
        }
        .purduct__item__yen {
          font-size: 0.12rem;
        }
        .product__item__origin {
          margin-left: 0.06rem;
          text-decoration: line-through;
          font-size: 12px;
          color: #999999;
        }
      }
      &__count {
        position: absolute;
        right: 0;
        bottom: 0;
        margin-bottom: 0.12rem;
        font-size: 0.14rem;
        .minus,
        .plus {
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          line-height: 0.19rem;
          border-radius: 50%;
          border: 0.01rem solid #666666;
          text-align: center;
          font-size: 0.2rem;
        }
        .minus {
          margin-right: 0.07rem;
        }
        .plus {
          margin-left: 0.07rem;
          background-color: #0091ff;
          color: #fff;
          border: none;
        }
      }
    }
  }
}
</style>
