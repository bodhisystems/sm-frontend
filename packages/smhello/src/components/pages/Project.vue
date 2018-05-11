<template>
  <section class="project-page">
    <header class="project-header">
      <div class="close-project" @click="closeProject">
        <svg class="close-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <line stroke-width="3" x1="2" x2="30" y1="2" y2="30"/>
          <line stroke-width="3" x1="2" x2="30" y1="30" y2="2"/>
        </svg>
      </div>
      <h2 class="project-title">{{ projectData.title }}</h2>
    </header>
    <Device />
    <Detail-row
      v-for="(detail, index) in projectData.details"
      :key="index"
      :flipped="!index % 2 === 0"
      :title="detail.title"
      :description="detail.description"
      :meta="detail.meta"
    ></Detail-row>
  </section>
</template>

<script>
import portfolio from '../../data/portfolio.json'
import Device from '../lib/Device'
import DetailRow from '../lib/DetailRow'

export default {
  components: {
    Device,
    DetailRow,
  },
  data() {
    return {
      projectData: undefined
    }
  },
  methods: {
    closeProject() {
      this.$router.push({ name: 'home' })
    }
  },
  created() {
    this.projectData = portfolio.work[this.project]
  },
  props: {
    project: {
      type: String,
      required: true
    },
  }
}
</script>
