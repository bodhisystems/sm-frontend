<template>
  <section class="layout">
    <Header />

    <section id="aboutPage">
      <section class="page-header page-hero" :style="'background-image:url(' + aboutus.imageUrl + ')'">
        <div class="row page-header__content">
            <article class="col-full">

              <h1 class="page-header__title text-center">
                  <a>{{ aboutus.name === 'Family' ? "Maharjan & Sherpa Family" : aboutus.name }}</a>
              </h1>

            </article>
        </div>
      </section>
      <section class="s-about">
        <div class="row section-intro has-bottom-sep">
            <div class="col-full text-center">
                <p v-if="aboutus.name == 'Family'" class="lead" v-html="aboutus.msg"></p>
                <p v-else class="lead">Hi! My name is {{ aboutus.name }}. Visit my <a :href="aboutus.gallery" target="_blank">Gallery</a></p>
            </div>
        </div>

        <div class="row block-1-4 block-tab-1-2 block-mob-full stats">
          <div class="col-block stats__col" v-if="index !== 'us'" v-for="(me, index) in about" :key="index">
            <a :href="me.gallery" target="_blank">
              <img :src="me.avatar" />
            </a>
              <h4><router-link :to="'/about/' + index">{{ me.name }} ({{ calculateAge(me.birthDate) }})</router-link></h4>
          </div>
        </div>

      </section>
    </section>

    <Footer />
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  // Shared Components
  import Header from '@/components/shared/Header'
  import Footer from '@/components/shared/Footer'


  export default {
    data() {
      return {
        showMoreText: "More",
        isActive: false,
        age: null,
        aboutus: {
          name: "",
          imageUrl: "",
          gallery: "",
          msg: ""
        }
      }
    },
    computed: {
      ...mapState('portfolio', { about: state => state.portfolio.about })
    },
    methods: {
      getAboutTitle(name){
        this.aboutus = this.about[name];
      },
      showMore(){
        this.showMoreText = this.showMoreText === 'More' ? "Less" : "More";
        this.isActive = !this.isActive;
      },
      calculateAge(date) {
          let currentDate = new Date(), birthDate = new Date(date);

          var years = (currentDate.getFullYear() - birthDate.getFullYear());

          if (currentDate.getMonth() < birthDate.getMonth() ||
              currentDate.getMonth() == birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
              years--;
          }

          return years;
      }
    },
    created(){
      let routeParam = this.$route.params.name ? this.$route.params.name : 'us';
      this.getAboutTitle(routeParam);
    },
    components: {
      Footer,
      Header
    }
  }
</script>

<style lang="scss">

  .hide {
    display: none;
  }
  #aboutPage  {
    .s-about {
      background-color: #FFFFFF;
      padding-top: 4.2rem;
      padding-bottom: 12rem;
    }
    .stats__col {
      text-align: center;
    }
    .page-header::before {
      opacity: .25;
    }
    .page-header {
      background-position: top, center;
    }
  }
</style>
