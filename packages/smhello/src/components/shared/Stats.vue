<template>
  <section id="stats" class="s-stats">
      <div class="row block-1-4 block-tab-1-2 block-mob-full stats">

          <div class="col-block stats__col ">
              <div class="stats__count">
                <animate-number
                  ref="awardsReceived"
                  from="1"
                  to="128"
                  from-color="#ffffff"
                  to-color="#222222"
                  duration="1000"
                  easing="easeOutQuad"
                  :formatter="formatter"
                  v-if='inViewport.now'
                ></animate-number>
              </div>
              <h4>Awards Received</h4>
          </div>
          <div class="col-block stats__col">
              <div class="stats__count">
                <animate-number
                  ref="cupsOfCoffee"
                  from="1"
                  to="1500"
                  duration="1000"
                  easing="easeOutQuad"
                  :formatter="formatter"
                  v-if='inViewport.now'
                ></animate-number>
              </div>
              <h4>Cups of Coffee</h4>
          </div>
          <div class="col-block stats__col stats__col--highlight">
              <div class="stats__upsign">
                  <a href="#"><i class="im im-arrow-up" aria-hidden="true"></i></a>
              </div>
              <div class="stats__count">
                <animate-number
                  ref="projectsCompleted"
                  from="1"
                  to="110"
                  duration="1000"
                  easing="easeOutQuad"
                  :formatter="formatter"
                  v-if='inViewport.now'
                ></animate-number>
              </div>
              <h4>Projects Completed</h4>
          </div>
          <div class="col-block stats__col">
              <div class="stats__count">
                <animate-number
                  ref="happyClients"
                  from="1"
                  to="101"
                  duration="1000"
                  easing="easeOutQuad"
                  :formatter="formatter"
                  v-if='inViewport.now'
                ></animate-number>
              </div>
              <h4>Happy Clients</h4>
          </div>

      </div>
  </section> <!-- end s-stats -->
</template>

<script>
  import inViewPort from 'vue-in-viewport-mixin';
  export default {
    data() {
      return {
        inViewPort: {
          now: false
        }
      }
    },
    mixins: [inViewPort],
    methods: {
      formatter: function (num) {
        return num.toFixed(0)
      },

      startAnimate: function () {
        const len = this.$refs.length;
        for(let i = 0; i < len; i++){
          this.$refs[i].start();
        }
      },
    },
    watch: {
      'inViewPort.now': function(visible) {
        if(visible) {
          this.startAnimate;
        }
   		}
    }
  }
</script>
