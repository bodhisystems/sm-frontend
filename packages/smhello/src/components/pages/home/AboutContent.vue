<template>
  <section id="about" class="s-about target-section">

      <div class="row narrow section-intro has-bottom-sep">
          <div class="col-full text-center">
              <h3><router-link to="/about">{{ $t('content.about.title') }}</router-link></h3>
              <h1>{{ $t('content.about.sub-title') }}</h1>
              <p class="lead">{{ $t('content.about.lead') }}</p>
          </div>
      </div>

      <div class="row about-content">

          <div class="col-full tab-full left">

              <h3>{{ $t('content.about.tab-full.title') }}</h3>
              <img src="../../../../static/images/hero-bg.jpg" />
              <p>{{ $t('content.about.tab-full.para-1') }}</p>
              <p>{{ $t('content.about.tab-full.para-2') }}</p>

          </div>

      </div> <!-- end about-content -->

      <div class="row about-content about-content--buttons">

          <div class="col-six tab-full left">
              <!-- <a href="https://www.linkedin.com/in/subashmaharjan/" class="btn btn--primary full-width">Download My CV</a> -->
              <router-link class="btn btn--primary full-width" to="/resume">My Resume</router-link>
          </div>
          <div class="col-six tab-full right">
              <a href="mailto:hudeomah@gmail.com" class="btn full-width">Hire Me Now</a>
          </div>

      </div> <!-- end about-content buttons -->

      <div class="row about-content about-content--timeline">

          <div class="col-full text-center">
              <h3>My Work Experience.</h3>
          </div>

          <div v-for="(column, index) in experiencColumn" :key="index" class="col-six tab-full" :class="index == 0 ? 'left': 'right'">
            <div v-for="data in column" class="timeline" :key="data.agency">
              <div class="timeline__block">
                  <div class="timeline__bullet"></div>
                  <div class="timeline__header">
                      <p class="timeline__timeframe">{{ data.timeframe.start }} - {{ data.timeframe.end }}</p>
                      <h3><a :href="data.links" target="_blank">{{ data.agency }}</a></h3>
                      <h5>{{ data.location }}</h5>
                      <h6>{{ data.position }}</h6>
                  </div>
                  <div class="timeline__desc">
                      <p>{{ data.description }}</p>
                  </div>
              </div>
            </div>
          </div>
      </div> <!-- end about-content timeline -->

  </section>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        experiencColumn: [[],[]]
      }
    },
    computed: {
      ...mapState('portfolio', { experience: state => state.portfolio.resume.experience })
    },
    methods: {
      divideColumn(type){
        var result = [[], []], halfLen = this.experience.length/2, pos = 0;
        this.experience.forEach(function(val, i) {
          if(type === 'odd-even') pos = i & 1;
          else {
            if(halfLen <= i) pos = 1;
          }

          result[pos].push(val);
        })
        return result;
      },
    },
    created() {
      this.experiencColumn = this.divideColumn()
    }
  }
</script>
