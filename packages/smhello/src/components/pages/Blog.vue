<template>
  <section class="layout">
    <Header />
    <BlogContent />
    <Footer />
  </section>
</template>


<script>
// Shared Components
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

// Pages
import BlogContent from '@/components/pages/blog/BlogContent'

export default {
  components: {
    Footer,
    Header,
    BlogContent
  }
}
</script>
