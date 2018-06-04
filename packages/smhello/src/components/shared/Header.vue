<template>
  <fixed-header :fixed.sync="isFixed" :threshold="100">
    <header class="s-header" :class="{ 'is-light': isFixed, 'is-primary': !isFixed }">
        <Logo />
        <Navigation />
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

<style lang="scss">
  .s-header {
    position: fixed;
    width: 100%;
    transition: background 0.15s ease-out;
    background: transparent;
    z-index: 10000;
  }
  .s-header.is-primary {
    background: transparent;
    .header-nav {
      li a {
        color: #999;
        &.router-link-active {
          color: #af2b2b;
        }
      }
    }
  }
  .s-header.is-light {
    background: #111;
  }
  .header-nav-wrap {
    top: 0;
    font-size: 12px;
  }
</style>
