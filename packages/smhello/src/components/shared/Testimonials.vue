<template>
  <div class="s-testimonials">

      <div class="overlay"></div>

      <div class="row testimonials-header">
          <div class="col-full">
              <h1 class="h02">What People Say.</h1>
          </div>
      </div>

      <div class="row testimonials">

          <!-- <div class="col-full testimonials__slider">

              <div class="testimonials__slide">
                  <img src="../../../static/images/avatars/user-01.jpg" alt="Author image" class="testimonials__avatar">
                  <p>Qui ipsam temporibus quisquam velMaiores eos cumque distinctio nam accusantium ipsum.
                  Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.</p>
                  <div class="testimonials__author h06">
                      Tim Cook
                      <span>CEO, Apple</span>
                  </div>
              </div>

              <div class="testimonials__slide">
                  <img src="../../../static/images/avatars/user-05.jpg" alt="Author image" class="testimonials__avatar">
                  <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                  Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</p>
                  <div class="testimonials__author h06">
                      Sundar Pichai
                      <span>CEO, Google</span>
                  </div>
              </div>

              <div class="testimonials__slide">
                  <img src="../../../static/images/avatars/user-02.jpg" alt="Author image" class="testimonials__avatar">
                  <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                  Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</p>
                  <div class="testimonials__author h06">
                      Satya Nadella
                      <span>CEO, Microsoft</span>
                  </div>
              </div>

          </div> -->

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
              prevArrow: "<div class=\'slick-prev\'><i class=\'im im-arrow-left\' aria-hidden=\'true\'></i></div>",
              nextArrow: "<div class=\'slick-next\'><i class=\'im im-arrow-right\' aria-hidden=\'true\'></i></div>",
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
            },
            testimonials: [
              {
                imageSrc: '/static/images/avatars/user-01.jpg',
                altText: 'Author image',
                description: 'Qui ipsam temporibus quisquam velMaiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.',
                author: 'Tim Cook',
                position: 'CEO, Apple'
              },
              {
                imageSrc: '/static/images/avatars/user-05.jpg',
                altText: 'Author image',
                description: 'Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.',
                author: 'Sundar Pichai',
                position: 'CEO, Google'
              },
              {
                imageSrc: '/static/images/avatars/user-02.jpg',
                altText: 'Author image',
                description: 'Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.',
                author: 'Satya Nadella',
                position: 'CEO, Microsoft'
              }
            ]
        };
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
