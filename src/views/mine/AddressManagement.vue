<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__back iconfont">&#xe625;</div>
      <div>管理收获地址</div>
      <div class="header__save">新建</div>
    </div>
    <div class="gap">我的收获地址</div>
    <div class="editaddress">
      <div class="editaddress__content">
        <div class="editaddress__content__title">
          <span class="editaddress__content__title__name">小慕</span>
          <span>18911023261</span>
        </div>
        <p class="editaddress__content__address">
          北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层
        </p>
      </div>
      <span class="editaddress__next iconfont">&#xe625;</span>
    </div>
    <div class="editaddress">
      <div class="editaddress__content">
        <div class="editaddress__content__title">
          <span class="editaddress__content__title__name">小慕</span>
          <span>18911023261</span>
        </div>
        <p class="editaddress__content__address">
          北京市海淀区西三环北路 2号院 北京理工大学 国防科技园2号楼 10层
        </p>
      </div>
      <span class="editaddress__next iconfont">&#xe625;</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.44rem;
  bottom: 0rem;
  padding: 0 0.18rem;
  background: #f5f5f5;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    margin-bottom: 0.12rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0.44rem;
    line-height: 0.44rem;
    height: 0.44rem;
    background-color: #fff;
    color: #333333;
    font-size: 0.16rem;
    &_-back {
      line-height: 0.46rem;
      color: #b6b6b6;
    }
    &__save {
      line-height: 0.46rem;
      font-size: 0.14rem;
    }
  }
  .gap {
    margin: 0.16rem 0 0.12rem 0;
    font-size: 14px;
    color: #333333;
  }
  .editaddress {
    display: flex;
    background-color: #fff;
    padding: 0 0.16rem;
    height: 1.04rem;
    border-radius: 0.04rem;
    margin-bottom: 0.16rem;
    &__content {
      width: 2.6rem;
      &__title {
        margin: 0.18rem 0 0.08rem 0;
        font-size: 14px;
        color: #999999;
        &__name {
          margin-right: 0.66rem;
        }
      }
      &__address {
        line-height: 0.2rem;
        font-size: 14px;
        color: #333333;
      }
    }
    &__next {
      flex: 1;
      line-height: 1.04rem;
      display: inline-block;
      transform: rotate(0.5turn);
    }
  }
}
</style>
