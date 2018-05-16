<template>
  <fixed-header :fixed.sync="isFixed" :threshold="100">
    <header class="s-header" :class="{ 'is-light': isFixed, 'is-primary': !isFixed }">
        <Logo />
        <Navigation />
        <a class="header-menu-toggle" href="#0"><span>Menu</span></a>
    </header>
  </fixed-header>

</template>

<script>
import FixedHeader from 'vue-fixed-header'
import Logo from '../lib/Logo';
import Navigation from '../lib/Navigation'

export default {
  data(){
    return {
        isFixed: true
    }
  },
  components: {
    FixedHeader,
    Logo,
    Navigation
  },
}
</script>

<style>
  .s-header {
    position: fixed;
    width: 100%;
    transition: background 0.15s ease-out;
    background: transparent;
    z-index: 10000;
  }
  .s-header.is-primary {
    background: transparent;
  }
  .s-header.is-light {
    background: #111;
  }
</style>
