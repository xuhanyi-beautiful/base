<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__position">
        <span class="header__position__icon iconfont">&#xe61f;</span>
        <span class="header__position__address"
          >北京理工大学国防科技园2号楼10层</span
        >
        <span class="header__position__bell iconfont">&#xe60b;</span>
      </div>
      <div class="header__search">
        <span class="header__search__icon iconfont">&#xe600;</span>
        <input
          class="header__search__input"
          type="text"
          placeholder="山姆会员商店优惠商品"
        />
      </div>
      <div class="header__banner">
        <img
          src="../../assets/u=1420279139,306133843&fm=253&fmt=auto&app=138&f=JPEG.webp"
          alt=""
          class="header__banner__img"
        />
      </div>
      <div class="header__nav">
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
        <div class="header__nav__item">
          <img
            class="header__nav__item__img"
            src="../../assets/编组@2x.png"
            alt=""
          />
          <p class="header__nav__item__title">超市便利</p>
        </div>
      </div>
    </div>
    <div class="grp"></div>
    <!-- 附近店铺 -->
    <div class="nearby">
      <h4 class="nearby__title">附近店铺</h4>
      <div class="nearby__shoplist">
        <img
          class="nearby__shoplist__img"
          src="../../assets/编组@2x.png"
          alt=""
        />
        <div class="nearby__shoplist__content">
          <h6 class="nearby__shoplist__content__title">沃尔玛</h6>
          <span>月售1万+</span>
          <span>起送￥0</span>
          <span>基础运费￥5</span>
          <p class="nearby__shoplist__content__des">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__shoplist">
        <img
          class="nearby__shoplist__img"
          src="../../assets/编组@2x.png"
          alt=""
        />
        <div class="nearby__shoplist__content">
          <h6 class="nearby__shoplist__content__title">沃尔玛</h6>
          <span>月售1万+</span>
          <span>起送￥0</span>
          <span>基础运费￥5</span>
          <p class="nearby__shoplist__content__des">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
      <div class="nearby__shoplist">
        <img
          class="nearby__shoplist__img"
          src="../../assets/编组@2x.png"
          alt=""
        />
        <div class="nearby__shoplist__content">
          <h6 class="nearby__shoplist__content__title">沃尔玛</h6>
          <span>月售1万+</span>
          <span>起送￥0</span>
          <span>基础运费￥5</span>
          <p class="nearby__shoplist__content__des">
            VIP尊享满89元减4元运费券（每月3张）
          </p>
        </div>
      </div>
    </div>
  </div>
  <BtNav />
</template>

<script setup>
import BtNav from '../../components/BtNav.vue'
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/variable.scss';
.wrapper {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 0.18rem;
}
.grp {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $background-color;
}
.header {
  &__position {
    display: flex;
    justify-content: space-between;
    margin: 0.16rem 0;
    height: 0.22rem;
    line-height: 0.22rem;
    color: $content-fontcolor3;
    &__icon {
      margin-right: 0.08rem;
      width: 0.2rem;
      font-size: 0.19rem;
    }
    &__bell {
      width: 0.2rem;
      font-size: 0.19rem;
    }
    &__address {
      flex: 1;
      font-size: 0.16rem;
      @include ellipsis;
    }
  }
  &__search {
    margin: 0.12rem 0;
    height: 0.32rem;
    line-height: 0.32rem;
    background: #f5f5f5;
    border-radius: 0.16rem;
    color: #b7b7b7;
    &__icon {
      margin: 0 0.12rem 0 0.16rem;
      font-size: 0.18rem;
    }
    &__input {
      position: relative;
      top: -0.01rem;
      vertical-align: baseline;
      outline: none;
      border: none;
      font-size: 0.14rem;
      background: none;
      &::placeholder {
        color: #b7b7b7;
      }
    }
  }
  &__banner {
    overflow: hidden;
    height: 0.86rem;
    border-radius: 0.08rem;
    &__img {
      width: 100%;
    }
  }
  &__nav {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 1.74rem;
    padding: 0.16rem 0;
    &__item {
      flex: 0 0 20%;
      text-align: center;
      &__img {
        width: 0.4rem;
        height: 0.4rem;
      }
      &__title {
        margin: 0.06rem 0 0 0;
        font-size: 0.12rem;
        color: $content-fontcolor3;
      }
    }
  }
}
.nearby {
  &__title {
    margin: 0;
    padding: 0.16rem 0 0.14rem 0;
    font-size: 0.18rem;
    color: $content-fontcolor3;
  }
  &__shoplist {
    display: flex;
    margin-bottom: 0.12rem;
    height: 0.86rem;
    &__img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
    &__content {
      flex: 1;
      border-bottom: 0.01rem solid #f1f1f1;
      color: #333333;

      &__title {
        margin: 0 0 0.08rem 0;
        font-size: 0.16rem;
        font-weight: normal;
      }
      span {
        margin-right: 0.16rem;
        font-size: 0.13rem;
      }
      &__des {
        margin: 0.08rem 0 0.12ewm 0;
        font-size: 0.13rem;
        color: $content-fontcolorr;
      }
    }
    // background-color: aliceblue;
  }
}
</style>
