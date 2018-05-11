<template>
  <section class="detail-row" :class="{ flipped }">
    <div class="detail-row-inner">
      <div class="detail-meta">
        <div class="detail-meta-block" v-for="item in meta" :key="item.id">
          <h4 class="detail-meta-title">{{ item.title }}</h4>
          <p class="detail-meta-description">{{ item.content }}</p>
        </div>
      </div>
      <div class="detail-overview">
        <h2 class="detail-title">{{ title }}</h2>
        <p class="detail-description">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    flipped: {
      type: Boolean,
      default: () => false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    meta: {
      type: Array,
      required: true
    },
  },
}
</script>
