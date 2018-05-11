<template>
  <section class="service-outline-page" :class="{ 'service-showing': showService }">
    <transition name="fade" @afterLeave="() => this.showService = true">
      <div class="service-headline-wrap" v-if="!currentService">
        <h2 class="service-headline">What can <span class="bold">digital</span> do for you?</h2>
      </div>
    </transition>
    <transition name="expand-left" @afterEnter="() => this.serviceOffering = true">
      <div class="service-container" v-if="showService">
        <transition name="fade">
          <div class="service-offering" v-if="serviceOffering">
            <h2 class="offering-title">{{ currentService }}</h2>
            <p class="offering-description">{{ currentServiceData.description }}</p>
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>

<script>
import portfolio from '../../data/portfolio.json'

export default {
  data() {
    return {
      currentService: '',
      showService: false,
      serviceOffering: false,
    }
  },
  computed: {
    currentServiceData() {
      return portfolio.services[this.currentService]
    },
  },
  created() {
    this.$bus.$on('service:show', service => this.currentService = service)
  },
}
</script>
