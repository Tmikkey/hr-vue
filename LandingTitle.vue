<template>
  <div>
    <h1>
      <span class="red">{{ titleRed }}</span>
      <br />
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'RedTitle',
  props: {
    titleRed: {
      type: String,
      default: 'Ближайшие',
    },
    title: {
      type: String,
      default: 'семинары',
    },
  },
}
</script>

<style scoped lang="scss">
.red {
  color: #ff4e3d;
}
h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 70px;
}
</style>
