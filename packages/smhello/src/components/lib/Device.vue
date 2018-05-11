<template>
  <section class="device" :class="{ desktop }">
    <div class="device-wrap">
      <div class="device-inner">
        <div class="device-top">
          <div class="top-icon"></div>
        </div>
        <div class="device-screen"></div>
        <div class="device-bottom">
          <div class="bottom-icon"></div>
        </div>
      </div>
    </div>

    <div class="device-toggle">
      <p class="toggle" @click="toggleDevice">Toggle</p>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      desktop: false
    }
  },
  methods: {
    toggleDevice() {
      this.desktop = !this.desktop
    }
  },
}
</script>
