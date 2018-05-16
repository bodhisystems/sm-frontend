<template>
  <div :class="loaderClass">
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
      <transition name="fade">
        <div id="preloader" v-if="isPreloading">
          <transition name="fade">
            <div id="loader">
              <bounce-loader v-if="loading" :loading="loading" :color="color" :size="size"></bounce-loader>
            </div>
          </transition>
        </div>
      </transition>
    </section>
  </div>
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

//import { addClass, removeClass } from './util/helpers'

export default {
  data() {
    return {
      isPreloading: true,
      loading: true,
      color: "#ff0000",
      size: "45px",
      loaderClass: 'ss-preload'
    }
  },
  mounted() {
    setTimeout(()=>{
      this.loading = false
      setTimeout(()=>{
        this.isPreloading = false
        this.loaderClass = 'ss-loaded'
      }, 300)
    }, 300);
  },
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

<style lang="scss" module>
  .fade {
    &-enter, &-leave-to {
      opacity: 0;
    }
    &-enter, &-leave {
      &-active {
        transition: opacity .5s;
      }
    }
  }
</style>
