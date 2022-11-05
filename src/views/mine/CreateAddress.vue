<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__back iconfont">&#xe625;</div>
      <div>新建收获地址</div>
      <div class="header__save">保存</div>
    </div>
    <div class="content">
      <div class="content__address">
        <span>所在城市：</span>
        <input type="text" placeholder="如北京市" />
      </div>
      <div class="content__address">
        <span>小区/大厦/学校：</span>
        <input type="text" placeholder="如理工大学国防科技园" />
      </div>
      <div class="content__address">
        <span>楼号-门牌号：</span>
        <input type="text" placeholder="A号楼B层" />
      </div>
      <div class="content__address">
        <span>收货人：</span>
        <input type="text" placeholder="请填写收货人的姓名" />
      </div>
      <div class="content__address">
        <span>联系电话：</span>
        <input type="text" placeholder="请填写收获手机号" />
      </div>
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
  .content {
    margin-top: 0.12rem;
    padding: 0 0.18rem;
    background-color: #fff;

    &__address {
      &:last-child {
        border: none !important;
      }
      display: flex;
      height: 0.44rem;
      line-height: 0.44rem;
      border-bottom: 0.01rem solid #f5f5f5;
      span {
        font-size: 0.14rem;
        color: #3f3f3f;
      }
      input {
        flex: 1;
        outline: none;
        border: none;
        font-size: 0.14rem;
        color: #e3e3e3;
        &::placeholder {
          color: #333;
        }
      }
    }
  }
}
</style>
