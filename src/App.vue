<template>
  <div id="app">
    <top-nav></top-nav>

    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from '@/components/topNav'
import Reset from 'minireset.css'

export default {
  name: 'App',
  components: {
    TopNav,
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica', Avenir, Helvetica, Arial, sans-serif;
}
</style>
