<template>
  <div id="app">
    <top-nav></top-nav>
    <site></site>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from '@/components/topNav'
import Reset from 'minireset.css'
import Site from '@/components/logic/site'

export default {
  name: 'App',
  components: {
    TopNav,
    Site,
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Helvetica', Avenir, Helvetica, Arial, sans-serif;
}
</style>
