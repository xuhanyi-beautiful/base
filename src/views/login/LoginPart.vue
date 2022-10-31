<template>
  <div class="wapper">
    <img src="../../assets/编组@2x.png" alt="" class="wapper__img" />
    <div class="wapper__content">
      <input
        v-model="username"
        type="text"
        class="wapper__content__input"
        placeholder="请输入手机号"
      />
    </div>
    <div class="wapper__content">
      <input
        v-model="password"
        type="password"
        class="wapper__content__input"
        placeholder="请输入密码"
      />
    </div>
    <div class="wapper__login__button" @click="handleLogin">登录</div>
    <div class="wapper__login__iink">
      <span @click="handleRegister">立即注册</span
      ><span class="wapper__login__iink__space">|</span><span>忘记密码</span>
    </div>
    <ToastPart v-if="showToast" :message="toastMessage" />
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import ToastPart, { useToastEffect } from '../../components/ToastPart'

const useLoginEffect = (toastChange) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const { username, password } = toRefs(data)
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      console.log(result)
      if (result.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        toastChange('登录错误')
      }
    } catch (error) {
      toastChange('请求错误')
    }
  }
  return { username, password, handleLogin }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegister = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegister }
}
// vue内部
export default {
  name: 'LoginPart',
  components: { ToastPart },

  setup() {
    // https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login
    const { showToast, toastMessage, toastChange } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(toastChange)
    const { handleRegister } = useRegisterEffect()
    return {
      handleLogin,
      handleRegister,
      username,
      password,
      showToast,
      toastMessage,
      toastChange
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  &__img {
    display: block;
    margin: 0 auto 0.4rem;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__content {
    margin: 0 0 0.16rem 0;
    line-height: 0.48rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    font-size: 0.16rem;
    &__input {
      margin-left: 0.16rem;
      line-height: 0.24rem;
      border: none;
      outline: none;
      background-color: #f9f9f9;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login__button {
    margin: 0.32rem 0 0.16rem 0;
    line-height: 0.48rem;
    text-align: center;
    background-color: rgba(0, 145, 255, 1);
    font-size: 16px;
    color: #ffffff;
  }
  &__login__iink {
    text-align: center;
    font-size: 14px;
    color: $content-notice-fontcolor;
    letter-spacing: 0;
    &__space {
      margin: 0 0.13rem;
      color: $content-notice-fontcolor;
    }
  }
}
</style>
