<template>
  <section class="layout">
    <Header />
    <section id="resume" class="s-about target-section">
        <div class="row no-print">
          <div class="col-full text-right">
            <a class="btn btn--stroke" @click="generate()">Download PDF</a>
          </div>
        </div>
        <div id="html-2-pdfwrapper" class="row top-section">

            <div class="col-three tab-full left">
                <div class="row narrow section-intro has-bottom-sep">
                    <div class="col-full text-left">
                        <h3>Subash <br/> Maharjan</h3>
                        <p class="lead">Fullstack Developer</p>
                        <h4>Personal Info</h4>
                        <address>
                          <p><span>Phone</span> <br/> <a href="tel:3219486213">321-948-6213</a></p>
                          <p><span>E-mail</span> <br/> <a href="mailto:hudeomah@gmail.com" target="_blank">hudeomah@gmail.com</a></p>
                          <p><span>www</span> <br/> <a href="/">subashmaharjan.com</a></p>
                          <p class="no-print"><span>linkedin</span> <br/> <a href="https://www.linkedin.com/in/subashmaharjan/" target="_blank">https://www.linkedin.com/in/subashmaharjan/</a></p>
                        </address>
                        <h4 class="no-print">Hard Skills</h4>
                        <ul class="no-print skill-bars">
                            <li>
                              <div class="progress percent100"><span>Expert</span></div>
                              <strong>Coding</strong>
                            </li>
                            <li>
                              <div class="progress percent75"><span>Advanced</span></div>
                              <strong>Debugging</strong>
                            </li>
                            <li>
                              <div class="progress percent50"><span>Intermediate</span></div>
                              <strong>Database</strong>
                            </li>
                        </ul>
                        <h4 class="no-print">Languages</h4>
                        <ul class="no-print skill-bars">
                            <li>
                              <div class="progress percent100"><span>Expert</span></div>
                              <strong>HTML</strong>
                            </li>
                            <li>
                              <div class="progress percent100"><span>Expert</span></div>
                              <strong>S(CSS)</strong>
                            </li>
                            <li>
                              <div class="progress percent80"><span>Advanced</span></div>
                              <strong>Javascript</strong>
                            </li>
                        </ul>
                        <h4 class="no-print">Soft Skills</h4>
                        <ul class="no-print skill-bars">
                            <li>
                              <div class="progress percent75"><span>Advanced</span></div>
                              <strong>Leadership</strong>
                            </li>
                            <li>
                              <div class="progress percent75"><span>Advanced</span></div>
                              <strong>Collaboration</strong>
                            </li>
                            <li>
                              <div class="progress percent75"><span>Advanced</span></div>
                              <strong>Critical Thinking</strong>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="col-nine tab-full right">
              <p class="lead">Creative and detail oriented Fullstack Developer, with a passion for thoughtful UI/UX design, collaboration and development.</p>
              <hr />
              <div class="row narrow section-intro">
                  <div class="col-full text-left">
                      <h3>Experience</h3>
                  </div>
              </div>
              <hr />
              <div class="row experience-column">
                <div class="col-full tab-full">
                  <div v-for="(data, index) in resume.experience" class="timeline" :key="index" :class="(index > 3 && !isExperienceActive) ? 'hide': ''">
                    <div class="timeline__block">
                        <div class="no-print timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">{{ data.timeframe.start }} - {{ data.timeframe.end }}</p>
                            <h3>{{ data.position }}</h3>
                            <h6><a :href="data.links" target="_blank">{{ data.agency }}</a> - {{ data.location }}</h6>

                        </div>
                        <div class="no-print timeline__desc">
                            <p>{{ data.description }}</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="col-full tab-full view-more no-print">
                  <a v-if="resume.experience.length > 4 && !hideOnPrint" class="btn btn--stroke" @click="viewMoreLess('experience')">View {{ expMore }}</a>
                </div>
              </div>

              <hr />
              <div class="row narrow section-intro">
                  <div class="col-full text-left">
                      <h3>Education</h3>
                  </div>
              </div>
              <hr />

              <div class="row education-column">
                <div class="col-full tab-full">
                  <div v-for="(data, index) in resume.education" class="timeline" :key="index" :class="(index > 2 && !isEducationActive) ? 'hide': ''">
                    <div class="timeline__block">
                        <div class="no-print timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">{{ data.timeframe.start }} - {{ data.timeframe.end }}</p>
                            <h3>{{ data.position }}</h3>
                            <h6><a :href="data.links" target="_blank">{{ data.agency }}</a> - {{ data.location }}</h6>
                        </div>
                        <div class="no-print timeline__desc">
                            <p>{{ data.description }}</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="col-full tab-full view-more no-print">
                  <a v-if="resume.education.length > 3 && !hideOnPrint" class="btn btn--stroke" @click="viewMoreLess('education')">View {{ eduMore }}</a>
                </div>

              </div>
            </div>

        </div> <!-- end about-content -->

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
        hideOnPrint: false,
        isEducationActive: false,
        isExperienceActive: false,
        eduMore: "More",
        expMore: "More",
        experiencColumn: [[],[]],
        eductionColumn:[[],[]]
      }
    },
    computed: {
      ...mapState('portfolio', { resume: state => state.portfolio.resume })
    },
    methods: {
      generate(){
        window.print();
      },
      divideColumn(data, type){
        var result = [[], []], halfLen = data.length/2, pos = 0;
        data.forEach(function(val, i) {
          if(type === 'odd-even') pos = i & 1;
          else {
            if(halfLen <= i) pos = 1;
          }
          result[pos].push(val);
        })
        return result;
      },
      viewMoreLess(type){
        if(type === 'education') {
          this.isEducationActive = !this.isEducationActive;
          this.eduMore = this.eduMore === 'More' ? "Less" : "More";
        }
        else {
          this.isExperienceActive = !this.isExperienceActive;
          this.expMore = this.expMore === 'More' ? "Less" : "More";
        }
      }
    },
    created() {
      this.experiencColumn = this.divideColumn(this.resume.experience)
      this.educationColumn = this.divideColumn(this.resume.education);
    },
    components: {
      Footer,
      Header,
      //AboutContent
    }
  }
</script>

<style lang="scss">
  #resume {
    .top-section {
      margin-top: 80px;
    }
    .skill-bars li .progress span {
      top: 1.4rem;

      &::after {
        border-bottom: 5px solid #000000;
        bottom: 22px;
        border-top: none;
      }
    }
    .timeline__block {
        min-height: auto;
    }

    .experience-column, .education-column {
      .hide {
        display: none;
      }
      .view-more {
        // margin-left: 35px;
        margin-top: 20px;
        a {
          width: 100%;
        }
      }
    }
  }


  @media print {
    @import "../../assets/scss/print.scss";
  }

</style>
