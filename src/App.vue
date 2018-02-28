<template>
  <div id="app">
  	<header-nav></header-nav>
  	<router-view></router-view>
    <footer-site></footer-site>
  </div>
</template>

<script>

import headerNav from '@/components/header-nav'
import footerSite from '@/components/footer-site'
export default {
  name: 'app',
  components: {
    headerNav,
    footerSite
  }
}
</script>

<style>

</style>
