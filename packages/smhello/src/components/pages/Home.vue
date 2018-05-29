<template>

<div>
  <walker />
    <section id="home" class="s-home page-hero target-section" data-parallax="scroll" data-image-src="" data-natural-width=3000 data-natural-height=2000 data-position-y=center>


         <Overlay />

         <div class="home-content">

             <div class="row home-content__main">


                 <h3>{{ $t('content.home.hero.greeting', {'welcomeText': 'hello there & namaste'}) }}</h3>

                 <h1>{{ $t('content.home.hero.quote') }}</h1>

                 <div class="home-content__buttons">
                     <a href="#works" class="smoothscroll btn btn--stroke">
                         {{ $t('content.home.hero.cta-latest-projects') }}
                     </a>
                     <a href="#about" class="smoothscroll btn btn--stroke">
                         {{ $t('content.home.hero.cta-more-about-me') }}
                     </a>
                 </div>

                 <scrollactive class="home-content__scroll" :duration="2000">
                     <a href="#about" class="scroll-link scrollactive-item">
                         <span>{{ $t('content.home.hero.link-scroll-down') }}</span>
                     </a>

                 </scrollactive>

             </div>

         </div>

         <Social />


     </section>
</div>

</template>


<script>

import Social from '../lib/Social'
import Overlay from '../lib/Overlay'
import Walker from '../lib/Walker'

export default {
  components: {
    Social,
    Overlay,
    Walker
  },
}
</script>

<style lang="scss">
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
