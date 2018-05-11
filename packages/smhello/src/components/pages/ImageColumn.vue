<template>
  <section class="image-column-page" :style="{ backgroundImage: `url(${image})` }">
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    }
  }
}
</script>
