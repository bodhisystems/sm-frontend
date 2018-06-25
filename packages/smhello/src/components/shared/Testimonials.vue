<template>
  <div class="s-testimonials">

      <div class="overlay"></div>

      <div class="row testimonials-header">
          <div class="col-full">
              <h1 class="h02">What People Say.</h1>
          </div>
      </div>

      <div class="row testimonials">

          <slick
            ref="slick"
            :options="slickOptions"
            class="col-full testimonials__slider">

            <div class="testimonials__slide" v-for="(testimonial, index) in testimonials" :key="index">
                <img :src="testimonial.imageSrc" :alt="testimonial.altText" class="testimonials__avatar">
                <p>{{ testimonial.description }}</p>
                <div class="testimonials__author h06">
                    {{ testimonial.author }}
                    <span>{{ testimonial.position }}</span>
                </div>
            </div>
          </slick>

      </div> <!-- end testimonials -->

  </div>
</template>


<script>
  import { mapState } from 'vuex';
  import Slick from 'vue-slick';

  export default {
    components: { Slick },

    data() {
        return {
            slickOptions: {
              arrows: true,
              dots: false,
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              prevArrow: "<div class='slick-prev'><i class='im im-arrow-left' aria-hidden='true'></i></div>",
              nextArrow: "<div class='slick-next'><i class='im im-arrow-right' aria-hidden='true'></i></div>",
              pauseOnFocus: false,
              autoplaySpeed: 1500,
              responsive: [
                  {
                      breakpoint: 900,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
            }
        }
    },
    computed: {
      ...mapState('portfolio', { testimonials: state => state.portfolio.testimonials })
    },
    // All slick methods can be used too, example here
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        // handleAfterChange(event, slick, currentSlide) {
        //     console.log('handleAfterChange', event, slick, currentSlide);
        // },
        // handleBeforeChange(event, slick, currentSlide, nextSlide) {
        //     console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        // },
        // handleBreakpoint(event, slick, breakpoint) {
        //     console.log('handleBreakpoint', event, slick, breakpoint);
        // },
        // handleDestroy(event, slick) {
        //     console.log('handleDestroy', event, slick);
        // },
        // handleEdge(event, slick, direction) {
        //     console.log('handleEdge', event, slick, direction);
        // },
        // handleInit(event, slick) {
        //     console.log('handleInit', event, slick);
        // },
        // handleReInit(event, slick) {
        //     console.log('handleReInit', event, slick);
        // },
        // handleSetPosition(event, slick) {
        //     console.log('handleSetPosition', event, slick);
        // },
        // handleSwipe(event, slick, direction) {
        //     console.log('handleSwipe', event, slick, direction);
        // },
        // handleLazyLoaded(event, slick, image, imageSource) {
        //     console.log('handleLazyLoaded', event, slick, image, imageSource);
        // },
        // handleLazeLoadError(event, slick, image, imageSource) {
        //     console.log('handleLazeLoadError', event, slick, image, imageSource);
        // },
    },
  }
</script>
