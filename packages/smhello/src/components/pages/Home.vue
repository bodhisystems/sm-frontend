<template>
  <section id="home" class="s-home page-hero target-section" data-parallax="scroll" data-image-src="../../../static/images/hero-bg.jpg" data-natural-width=3000 data-natural-height=2000 data-position-y=center>

       <Overlay />

       <div class="home-content">

           <div class="row home-content__main">

               <h3>Hello There</h3>

               <h1>
                   I am Jonathan Doe. <br>
                   I am a graphic & UI/UX <br>
                   designer based in Somewhere.
               </h1>

               <div class="home-content__buttons">
                   <a href="#works" class="smoothscroll btn btn--stroke">
                       Latest Projects
                   </a>
                   <a href="#about" class="smoothscroll btn btn--stroke">
                       More About Me
                   </a>
               </div>

               <div class="home-content__scroll">
                   <a href="#about" class="scroll-link smoothscroll">
                       <span>Scroll Down</span>
                   </a>
               </div>

           </div>

       </div>

       <Social />

   </section>
</template>


<script>

import Social from '../lib/Social'
import Overlay from '../lib/Overlay'

export default {
  components: {
    Social,
    Overlay
  },
}
</script>
