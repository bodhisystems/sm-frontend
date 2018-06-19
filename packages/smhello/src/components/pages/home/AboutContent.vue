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

          <!-- <div class="col-six tab-full right">

          </div> -->

          <!-- <div class="col-six tab-full right">
              <h3>I've Got Some skills.</h3>

              <ul class="skill-bars">
                  <li>
                  <div class="progress percent90"><span>90%</span></div>
                  <strong>HTML</strong>
                  </li>
                  <li>
                  <div class="progress percent85"><span>85%</span></div>
                  <strong>CSS</strong>
                  </li>
                  <li>
                  <div class="progress percent70"><span>70%</span></div>
                  <strong>Javascript</strong>
                  </li>
                  <li>
                  <div class="progress percent95"><span>50%</span></div>
                  <strong>PHP, JAVA, .NET</strong>
                  </li>
                  <li>
                  <div class="progress percent75"><span>60%</span></div>
                  <strong>Wordpress, Drupal, OrchardCMS, Liferay</strong>
                  </li>
              </ul>
          </div> -->

      </div> <!-- end about-content -->

      <div class="row about-content about-content--buttons">

          <div class="col-six tab-full left">
              <a href="https://www.linkedin.com/in/subashmaharjan/" class="btn btn--primary full-width">Download My CV</a>
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
                      <h3><a :href="data.links">{{ data.agency }}</a></h3>
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

  export default {
    data() {
      return {
        experiencColumn: [[],[]],
        experience: [
          {
            timeframe: {
              start: "March 2018",
              end: "Present"
            },
            agency: "Updater",
            links: "http://www.updater.com/",
            position: "Senior Frontend Engineer",
            location: "Charlottesville, Virginia",
            description: "Updater is a technology company that builds powerful tools to help people move. Updater's digital tools help people find and reserve trustworthy moving companies, connect home services, forward their mail, transfer utilities, update accounts, and much more – all in one easy-to-use platform."
          },
          {
            timeframe: {
              start: "December 2015",
              end: "March 2018"
            },
            agency: "Digital Management",
            links: "https://dminc.com/",
            location: "Charlottesville, Virginia",
            position: "Senior Frontend Developer - Javascript",
            description: "DMI is a global, end-to-end mobility company that offers a variety of solutions including Mobility Strategy, Brand Marketing, UX, Web & App Development, Omnichannel Commerce, Big Data Insights, Managed Mobility Services, Cybersecurity Solutions and Infrastructure Services."
          },
          {
            timeframe: {
              start: "April 2011",
              end: "November 2015"
            },
            agency: "Silverchair",
            links: "https://www.silverchair.com/",
            position: "Senior UI Developer",
            location: "Charlottesville, Virginia",
            description: "Silverchair designs and develops semantic technologies, publishing platforms, and e-learning solutions to scientific, technical and medical publishers, academic medical centers, professional societies, and the federal government in the United States."
          },
          {
            timeframe: {
              start: "April 2009",
              end: "April 2011"
            },
            agency: "Enviroapps",
            links: "http://www.enviroapps.com/",
            position: "UI Developer",
            location: "Orlando, Florida",
            description: "EnviroApps bring solutions to modern challenges using environment friendly technologies empowered by human imagination and care for the future generation. Their process of engineering development and deployment follow the GISTS (Green Infra Structure Technology Solutions) architecture to be eco-efficient and help transforming our engineers’ imaginative ideas in to products and solutions."
          },
        ]
      }
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
