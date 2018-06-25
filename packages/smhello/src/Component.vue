<template>
  <div :class="loaderClass">
    <router-view  :key="$route.fullPath"/>

    <transition name="fade">
      <div id="preloader" v-if="isPreloading">
        <transition name="fade">
          <div id="loader">
            <bounce-loader v-if="loading" :loading="loading" :color="color" :size="size"></bounce-loader>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isPreloading: true,
      loading: true,
      color: "#ff0000",
      size: "45px",
      loaderClass: 'ss-preload',
    }
  },
  mounted() {
    setTimeout(()=>{
      this.loading = false
      setTimeout(()=>{
        this.isPreloading = false
        this.loaderClass = 'ss-loaded'
      }, 300)
    }, 300);
  }
}
</script>
