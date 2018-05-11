<template>
  <section class="services-page">
    <ul class="services-list">
      <li v-for="(data, service) in services" :key="data.id"><a href @click.prevent="() => $bus.$emit('service:show', service)">{{ service }}</a></li>
    </ul>
  </section>
</template>

<script>
import portfolio from '../../data/portfolio.json'

export default {
  computed: {
    services() {
      return portfolio.services
    }
  }
}
</script>
