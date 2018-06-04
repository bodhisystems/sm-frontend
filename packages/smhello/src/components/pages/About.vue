<template>
  <section class="layout">
    <Header />
    <AboutContent />
    <Footer />
  </section>
</template>


<script>
// Shared Components
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// Pages
import AboutContent from '@/components/pages/home/AboutContent'

export default {
  components: {
    Footer,
    Header,
    AboutContent
  }
}
</script>
