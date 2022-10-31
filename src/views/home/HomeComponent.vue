<template>
  <div class="wraper">
    <StaticPart />
    <NearBy />
  </div>
  <DockerPart />
</template>
<script>
import StaticPart from './StaticPart'
import NearBy from './NearBy'
import DockerPart from './DockerPart'
export default {
  name: 'HomeComponent',
  components: { StaticPart, NearBy, DockerPart }
}
</script>
<style lang="scss" scoped>
@import '../../style/variables.scss';
.wraper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  color: $content-fontcolor;
}
</style>
