<template>
  <!-- header
  ================================================== -->
  <header class="s-header">

      <Logo />

      <Navigation />

      <a class="header-menu-toggle" href="#0"><span>Menu</span></a>

  </header> <!-- end s-header -->
</template>

<script>
import Logo from '../lib/Logo';
import Navigation from '../lib/Navigation'

export default {
  components: {
    Logo,
    Navigation
  },
}
</script>
