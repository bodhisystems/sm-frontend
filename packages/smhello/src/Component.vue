<template>
  <section class="layout">
    <Header />
    <Home />
    <About />
    <Works />
    <Testimonials />
    <Blog />
    <Cta />
    <Stats />
    <Contact />
    <Footer />
    <PhotoSwipe />
    <!-- <div id="preloader">
        <div id="loader"></div>
    </div> -->
  </section>
</template>

<script>
// Shared Components
import Cta from './components/shared/Cta'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import PhotoSwipe from './components/shared/PhotoSwipe'
import Stats from './components/shared/Stats'
import Testimonials from './components/shared/Testimonials'

// Pages
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Works from './components/pages/Works'

export default {
  components: {
    Cta,
    Footer,
    Header,
    PhotoSwipe,
    Stats,
    Testimonials,
    About,
    Blog,
    Contact,
    Home,
    Works,
  }
}
</script>
