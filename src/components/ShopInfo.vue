<template>
  <div class="shop">
    <img :src="item.imgUrl" alt="" class="shop__img" v-if="item.imgUrl" />
    <div
      class="shop__content"
      :class="{ shop__content__borderHide: hideBorder ? false : true }"
    >
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tags__tag">月售：{{ item.sales }}</span>
        <span class="shop__content__tags__tag"
          >起送：{{ item.expressLimit }}</span
        >
        <span class="shop__content__tags__tag"
          >基础运费：{{ item.expressPrice }}</span
        >
      </div>
      <div class="shop__content__heighlight">
        {{ item.slogan }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder'],
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.shop {
  display: flex;
  margin: 0.12rem 0;
  color: #333333;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    &__borderHide {
      border-bottom: 1px solid $content-bgcolor;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
    }
    &__tags {
      margin: 0.08rem 0;
      &__tag {
        margin-right: 0.16rem;
        line-height: 0.18rem;
        font-size: 0.13rem;
      }
    }
    &__heighlight {
      font-size: 13px;
      color: #e93b3b;
      padding-bottom: 0.12rem;
    }
  }
}
</style>
