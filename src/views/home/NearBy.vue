<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>
<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
const useNearList = () => {
  const nearList = ref([])
  const handleNearList = async () => {
    const result = await get('/api/shop/hot-list')
    console.log(result)
    nearList.value = result.data
  }
  handleNearList()
  return { nearList }
}
export default {
  name: 'NearBy',
  components: { ShopInfo },
  setup() {
    const { nearList } = useNearList()
    return { nearList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/variables.scss';
.nearby {
  color: $content-fontcolor;
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    line-height: 0.25rem;
    font-size: 0.18rem;
    font-weight: normal;
  }
  a {
    text-decoration: none;
    color: none;
  }
}
</style>
