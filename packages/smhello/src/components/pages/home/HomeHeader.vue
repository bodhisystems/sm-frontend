<template>
  <fixed-header :fixed.sync="isFixed" :threshold="100">
    <header class="s-header" :class="{ 'is-light': isFixed, 'is-primary': !isFixed }">
        <Logo />
        <Scroll-Navigation />
    </header>
  </fixed-header>

</template>

<script>
import FixedHeader from 'vue-fixed-header'
import Logo from '@/components/lib/Logo';
import ScrollNavigation from '@/components/lib/ScrollNavigation'

export default {
  data(){
    return {
        isFixed: true
    }
  },
  components: {
    FixedHeader,
    Logo,
    ScrollNavigation
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
  }
  .s-header.is-light {
    background: #111;
  }
</style>
