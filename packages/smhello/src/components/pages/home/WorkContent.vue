<template>
  <section id="works" class="s-works target-section">

    <div class="row narrow section-intro has-bottom-sep">
        <div class="col-full">
            <h3><router-link to="/works">{{ $t('content.works.title') }}</router-link></h3>
            <h1>Latest Projects</h1>

            <!-- <p class="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p> -->
        </div>
    </div>

    <div v-masonry transition-duration="0.3s" item-selector=".masonry__brick" class="row masonry-wrap">
        <div class="masonry">
          <div v-masonry-tile class="masonry__brick" v-for="(item, index) in works" :key="index">
              <div class="item-folio">

                  <div class="item-folio__thumb">
                      <a :href="'/static/images/portfolio/gallery/g-' + item.image[0] + '.jpg'" class="thumb-link" :title="item.image[1]" data-size="1050x700">
                          <img :src="'./static/images/portfolio/' + item.image[0] + '.jpg'"
                               :srcset="'/static/images/portfolio/' + item.image[0] + '.jpg 1x, /static/images/portfolio/' + item.image[0] + '@2x.jpg 2x'" :alt="item.image[2]">
                          <span class="shadow-overlay"></span>
                      </a>

                  </div>

                  <div class="item-folio__text">
                      <h3 class="item-folio__title">
                          {{ item.title }}
                      </h3>
                      <p class="item-folio__cat">
                          {{ item.category }}
                      </p>
                  </div>

                  <a :href="item.link[0]" class="item-folio__project-link" :title="item.link[1]" target="_blank">
                      <i class="im im-link"></i>
                  </a>

                  <div class="item-folio__caption">
                      <p>{{ item.caption }}</p>
                  </div>

              </div> <!-- end item-folio -->
          </div> <!-- end masonry__brick -->
        </div>
      </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState('portfolio', { works: state => state.portfolio.works })
    },
  }
</script>

<style lang="scss">
  @media screen and (max-width: 767px) {
    .masonry__brick {
      position: inherit!important;
      height: 120px;
    }
    .item-folio {
      max-height: 100%;
    }
  }

</style>
