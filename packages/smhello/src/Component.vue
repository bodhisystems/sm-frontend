<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      /**
       * Global Styles
       */
       '$globalStyle': {
         emphasized: this.$style.emphasized
       }
    }
  }
}
</script>

<style lang="scss" module>
  /* import scss variables */
  @import "assets/settings.scss";

  /* text styles */
  .emphasized {
    font-weight: 500;
    line-height: 1.5;
    color: $base_color;
  }
</style>
