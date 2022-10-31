<template>
  <!-- position区域 -->
  <div class="position">
    <span class="position__icon iconfont">&#xe61f;</span>
    北京理工大学国防科技园2号楼10层
    <span class="position__bell iconfont">&#xe60b;</span>
  </div>
  <!-- search区域 -->
  <div class="search">
    <span class="iconfont">&#xe600;</span>
    山姆会员商店优惠商品
  </div>
  <!-- banner区域 -->
  <div class="banner">
    <img
      class="banner__img"
      src="../../assets/u=1420279139,306133843&fm=253&fmt=auto&app=138&f=JPEG.webp"
      alt=""
    />
  </div>
  <!-- icons区域 -->
  <div class="icons">
    <div class="icon__item" v-for="(item, index) in iconsList" :key="index">
      <img :src="item.imgUrl" alt="" class="icon__item__icon" />
      <p class="icon__item__desc">{{ item.text }}</p>
    </div>
  </div>
  <!-- gap区域 -->
  <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart.vue',
  setup() {
    const iconsList = [
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' },
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' },
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' },
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' },
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' },
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' },
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' },
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' },
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' },
      { imgUrl: require('../../assets/超市@2x.png'), text: '超市便利' }
    ]
    return { iconsList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.position {
  box-sizing: border-box;
  position: relative;
  margin: 0.16rem 0;
  padding: 0 0.18rem 0 0;
  width: 100%;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  &__icon {
    position: relative;
    left: 0;
    top: 0.01rem;
    margin-right: 0.04rem;
    font-size: 0.19rem;
  }
  &__bell {
    position: absolute;
    top: 0.02rem;
    right: 0;
    font-size: 0.19rem;
  }
}
.search {
  line-height: 0.32rem;
  margin-bottom: 0.12rem;
  background: #f5f5f5;
  border-radius: 16px;
  font-size: 0.14rem;
  color: #b7b7b7;
  .iconfont {
    margin: 0 0.05rem 0 0.15rem;
  }
}
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 31.25%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  color: $content-fontcolor;
  .icon__item {
    width: 20%;
    &__icon {
      display: block;
      margin: 0 auto;
      width: 0.4rem;
      height: 0.4rem;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
    }
  }
}
.gap {
  background: $content-bgcolor;
  height: 0.1rem;
  margin: 0 -0.18rem;
}
</style>
