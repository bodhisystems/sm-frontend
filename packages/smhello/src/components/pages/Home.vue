<template>
  <section class="layout">
    <HomeHeader />
    <walker />
    <section id="home" class="s-home page-hero target-section" data-parallax="scroll" data-image-src="" data-natural-width=3000 data-natural-height=2000 data-position-y=center>
       <Overlay />
       <HomeContent />
       <Social />
    </section>

    <About />
    <Works />

    <Testimonials />
    <BlogContent />
    <Cta />
    <Stats />

    <Contact />
    <Footer />
    <PhotoSwipe />

  </section>
</template>


<script>
// Shared Components
import Social from '@/components/lib/Social'
import Overlay from '@/components/lib/Overlay'
import Walker from '@/components/lib/Walker'
import Cta from '@/components/shared/Cta'
import Footer from '@/components/shared/Footer'

import PhotoSwipe from '@/components/shared/PhotoSwipe'
import Stats from '@/components/shared/Stats'
import Testimonials from '@/components/shared/Testimonials'

// Pages
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import Works from '@/components/pages/Works'

import HomeHeader from '@/components/pages/home/HomeHeader'
import HomeContent from '@/components/pages/home/HomeContent'

import BlogContent from '@/components/pages/blog/BlogContent'

export default {
  components: {
    Cta,
    Footer,
    HomeHeader,
    PhotoSwipe,
    Stats,
    Testimonials,
    HomeContent,
    About,
    BlogContent,
    Contact,
    Works,
    Social,
    Overlay,
    Walker
  }
}
</script>

<style lang="scss">
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
  .scrollmagic-pin-spacer {
    padding: 0!important;
    //z-index: 9999!important;
    width: 100%!important;
    height: 300px!important;
    z-index: 100;
  }

  #pinned_wrapper, #sky, #city, #skyline-wrapper, #skyline  {
    height: 300px!important;
  }

  #pinned_wrapper #walker {
    top: 41%!important;
  }

  .s-home {
    z-index: 101;
  }
</style>
