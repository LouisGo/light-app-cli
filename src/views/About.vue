<template>
  <div class="about">
    <h1 class="test go">This is an about page</h1>
    <h2 class="ignore one-px-top">{{ test }}</h2>
    <h2>{{ test2 }}</h2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      test: process.env.VUE_APP_ENV_NAME,
      test2: process.env.NODE_ENV
    }
  }
}
</script>
<style lang="scss">
@import '../styles/var.scss';
.ignore {
  width: 300px;
  height: 60px;
  text-align: center;
}
</style>

