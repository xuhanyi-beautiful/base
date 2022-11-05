<template>
  <div class="wrapper">
    <div class="header">
      <img class="header__img" src="../../assets/编组@2x.png" alt="" />
    </div>
    <div class="content">
      <div class="content__username">
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="content__password">
        <input type="password" placeholder="请输入密码" />
      </div>
      <div class="content__password">
        <input type="password" placeholder="确认密码" />
      </div>
    </div>
    <div class="button"><span>注册</span></div>
    <div class="handleother">
      <span class="handleother__gologin">已有账号去登陆</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  padding: 0 0.4rem;
  .header {
    text-align: center;
    &__img {
      margin-bottom: 0.4rem;
      width: 0.66rem;
      height: 0.66rem;
    }
  }
  .content {
    &__username,
    &__password {
      height: 0.48rem;
      margin-bottom: 0.16rem;
      padding-left: 0.16rem;
      background-color: #f9f9f9;
      border-radius: 0.06rem;
      input {
        display: inline-block;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        font-size: 0.16rem;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .button {
    margin: 0.32rem 0 0.16rem 0;
    line-height: 0.48rem;
    height: 0.48rem;
    background: #0091ff;
    text-align: center;
    color: #fff;
    font-size: 0.16rem;
  }
  .handleother {
    text-align: center;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>
<script></script>
