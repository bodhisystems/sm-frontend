<template>
  <section class="overlay" v-if="open">
    <div class="overlay-inner">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
