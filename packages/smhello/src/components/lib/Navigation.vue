<template>
  <div>
    <a class="header-menu-toggle" :class="{ 'is-clicked': open }" href="#0" @click="open = !open"><span>Menu</span></a>

      <nav class="header-nav-wrap" :class="{ 'mobile': isMobile, 'slideDown' : open, 'slideUp' : !open }">
        <transition name="fade" mode="out-in">
          <ul class="header-nav">
              <li class="current"><a class="smoothscroll"  href="#home" title="home">Home</a></li>
              <li><a class="smoothscroll"  href="#about" title="about">About</a></li>
              <li><a class="smoothscroll"  href="#works" title="works">Works</a></li>
              <li><a class="smoothscroll"  href="#blog" title="blog">Blog</a></li>
              <li><a class="smoothscroll"  href="#contact" title="contact">Contact</a></li>
          </ul>
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
  .header-nav-wrap.mobile {
    &.slideUp {

    }
    &.slideDown {
      display: block!important;
      animation-name: slideDown;
    	-webkit-animation-name: slideDown;

    	animation-duration: 1s;
    	-webkit-animation-duration: 1s;

    	animation-timing-function: ease;
    	-webkit-animation-timing-function: ease;

    	visibility: visible !important;
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
