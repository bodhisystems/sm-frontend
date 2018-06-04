<template>
  <div>
    <a class="header-menu-toggle" :class="{ 'is-clicked': open }" href="#0" @click="open = !open"><span>Menu</span></a>

      <nav class="header-nav-wrap" :class="{ 'mobile': isMobile, 'slideDown' : open, 'slideUp' : !open }">
          <transition name="fade" mode="out-in">
            <scrollactive active-class="current" :offset="70" class="header-nav" :duration="1500">
                <a class="scrollactive-item current"  href="#home" title="home"><span>Home</span></a>
                <a class="scrollactive-item"  href="#about" title="about"><span>About</span></a>
                <a class="scrollactive-item"  href="#works" title="works"><span>Works</span></a>
                <a class="scrollactive-item"  href="#blog" title="blog"><span>Blog</span></a>
                <!-- <a class="scrollactive-item"  href="#contact" title="contact"><span>Contact</span></a> -->
            </scrollactive>
          </transition>
      </nav>

  </div>
</template>


<script>

  export default {
    data() {
      return {
        open: false,
        isMobile: false,
        windowWidth: 0,
        windowHeight: 0,
      }
    },
    mounted(){
      this.$nextTick(function(){
        window.addEventListener('resize', this.setIsVisible);

        //Init
        this.setIsVisible()
      })
    },
    methods: {
      setIsVisible() {
        this.windowWidth = document.documentElement.clientWidth;
        if(this.windowWidth > 800) {
          this.isMobile = false
        } else {
          this.isMobile = true
        }
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setIsVisible);
    }
  }
</script>


<style lang="scss">
  @mixin animation($name, $duration, $animation) {
    animation-name: $name;
    animation-duration: $duration;
    animation-timing-function: $animation;
    -webkit-animation-name: $name;
    -webkit-animation-duration: $duration;
    -webkit-animation-timing-function: $animation;
  }
  .header-nav {
    a {
      display: inline-block;
      padding-left: 0;
      margin-right: 2rem;

      span {
        display: block;
        line-height: 72px;
        color: #FFFFFF;
      }

      &.current span {
        font-family: "montserrat-extrabold", sans-serif;
        color: #af2b2b;
      }
    }

    &-wrap.mobile {
      &.slideUp {

      }
      &.slideDown {
        display: block!important;
        @include animation(slideDown, 1s, ease);
      	visibility: visible !important;
      }
    }

    @media only screen and (max-width: 800px) {
        &-wrap .header-nav a {
            display: block;
            margin: 0;
            padding: 0;
            border-bottom: 1px dotted rgba(255, 255, 255, 0.07);

            span {
                padding: 18px 0;
                line-height: 18px;
            }
        }
    }
  }


  .header-menu-toggle {
    z-index: 200;
  }

  .fade {
    &-enter, &-leave-to {
      opacity: 0;
    }
    &-enter, &-leave {
      &-active {
        transition: opacity .5s;
      }
    }
  }

  @keyframes slideDown {
  	0% { transform: translateY(-100%); }
  	50%{ transform: translateY(8%); }
  	65%{ transform: translateY(-4%); }
  	80%{ transform: translateY(4%); }
  	95%{ transform: translateY(-2%); }
  	100% { transform: translateY(0%); }
  }

  @-webkit-keyframes slideDown {
    0%    { -webkit-transform: translateY(-100%); }
  	50%   { -webkit-transform: translateY(8%); }
  	65%   { -webkit-transform: translateY(-4%); }
  	80%   { -webkit-transform: translateY(4%); }
  	95%   { -webkit-transform: translateY(-2%); }
  	100%  { -webkit-transform: translateY(0%); }
  }
</style>
