<template>
  <section class="project-card" :style="{ background: `url(${this.thumbnail})` }" @click="viewProject">
    <div class="title-overlay">
      <h3 class="title">{{ title }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    viewProject() {
      this.$router.push({ name: 'project', params: { project: this.slug } })
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>
