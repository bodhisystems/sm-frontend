<template>
  <section class="layout">
    <HomeHeader />
    <walker />
    <section id="home" class="s-home page-hero target-section" data-parallax="scroll" data-image-src="" data-natural-width=3000 data-natural-height=2000 data-position-y=center>
       <Overlay />
       <HomeContent />
       <Social />
    </section>

    <AboutContent />
    <WorkContent />

    <Testimonials />
    <section id="blog" class="s-blog target-section">

        <div class="row narrow section-intro has-bottom-sep">
            <div class="col-full">
                <h3><router-link to="/blog">{{ $t('content.blog.title') }}</router-link></h3>
                <h1>{{ $t('content.blog.sub-title') }}</h1>
            </div>
        </div>

        <BlogContent />
    </section>
    <Cta />
    <!-- <Stats />

    <Contact /> -->
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
// import Stats from '@/components/shared/Stats'
import Testimonials from '@/components/shared/Testimonials'

// Pages
import HomeHeader from '@/components/pages/home/HomeHeader'
import HomeContent from '@/components/pages/home/HomeContent'
import AboutContent from '@/components/pages/home/AboutContent'
import BlogContent from '@/components/pages/home/BlogContent'
import WorkContent from '@/components/pages/home/WorkContent'
// import Contact from '@/components/pages/home/ContactForm'

export default {
  components: {
    Cta,
    Footer,
    HomeHeader,
    PhotoSwipe,
    // Stats,
    Testimonials,
    HomeContent,
    AboutContent,
    BlogContent,
    // Contact,
    WorkContent,
    Social,
    Overlay,
    Walker
  },
  filters: {
    titleCase: function(value) {
        if (!value) return ''
        //ref: https://gist.github.com/kkiernan/91298079d34f0f832054
        return value.split('_').map(function(item) {
            return item.charAt(0).toUpperCase() + item.substring(1);
        }).join(' ');
    },
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
  .s-home {
    z-index: 101;
    .overlay {
      opacity: 0.85;
    }
  }

</style>
