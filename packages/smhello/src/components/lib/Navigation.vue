<template>
  <section class="navigation" :class="{ flipped }">
    <div class="navigation-inner" @click="navigate">
      <p class="page-title">{{ to }}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="30" class="arrow">
        <path fill="#273B4E" fill-rule="evenodd" stroke="#273B4E" d="M4 1v25m0 0l3-10.8H1L4 26z" stroke-linecap="square"/>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    navigate() {
      this.$router.push({ name: this.to })
    }
  },
  props: {
    to: {
      type: String,
      required: true
    },
    flipped: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
