<template>
  <section class="layout">
    <Header />
    <WorkContent />
    <Footer />
  </section>
</template>


<script>
// Shared Components
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// Pages
import WorkContent from '@/components/pages/home/WorkContent'

export default {
  components: {
    Footer,
    Header,
    WorkContent
  }
}
</script>
