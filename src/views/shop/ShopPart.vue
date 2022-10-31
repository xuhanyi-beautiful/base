<template>
  <div class="wrapper">
    <div class="search">
      <span class="search__icon iconfont" @click="handleBackClick"
        >&#xe6db;</span
      >
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe600;</span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称搜索"
        />
      </div>
    </div>
    <ShopInfo :item="data.item" :hideBorder="true" />
    <ContentPart />
    <CartPart />
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import ContentPart from './ContentPart.vue'
import CartPart from './CartPart.vue'

// 获取商店详情的数据
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const handleItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  handleItemData()
  return { data }
}

// 点击返回上一页
const useBackClick = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}
export default {
  name: 'ShopPart',
  components: { ShopInfo, CartPart, ContentPart },
  setup() {
    const { data } = useShopInfoEffect()
    const { handleBackClick } = useBackClick()
    return { data, handleBackClick }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
  .search {
    display: flex;
    margin: 0.16rem 0;
    height: 0.32rem;
    line-height: 0.32rem;
    &__icon {
      width: 0.18rem;
      font-size: 0.3rem;
      color: #b6b6b6;
    }
    &__content {
      display: flex;
      flex: 1;
      margin-left: 0.16rem;
      background: #f5f5f5;
      border-radius: 16px;
      &__icon {
        display: block;
        margin: 0 0.12rem 0 0.16rem;
        width: 0.16rem;
        font-size: 0.18rem;
        color: #b7b7b7;
      }
      &__input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 0.14rem;
        color: #333;
        background: none;
      }
    }
  }
}
</style>
