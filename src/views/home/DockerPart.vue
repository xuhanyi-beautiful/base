<template>
  <!-- docker区域 -->
  <div class="docker">
    <div
      v-for="(item, index) in list"
      :key="item.text"
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__item__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DockerPart',
  setup() {
    const list = [
      { icon: '&#xe7c6; ', text: '首页' },
      { icon: '&#xe649;', text: '购物车' },
      { icon: '&#xe713;', text: '订单' },
      { icon: '&#xe639;', text: '我的' }
    ]
    return {
      list
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variables.scss';
.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 0.18rem;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgcolor;
  color: $content-fontcolor;
  .iconfont {
    font-size: 0.18rem;
    margin: 0.07rem 0 0.02rem 0;
  }
  &__item--active {
    color: #1fa4fc;
  }
  &__item {
    flex: 1;
    text-align: center;
    &__title {
      font-size: 0.2rem;
      transform: scale(0.5);
      transform-origin: center top;
    }
  }
}
</style>
