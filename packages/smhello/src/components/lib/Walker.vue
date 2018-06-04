<template>

  <div id="pinned_wrapper">
        <div id="sky"></div>
        <div id="city"></div>
        <div id="skyline_wrapper">
          <div id="skyline"></div>
        </div>
        <div id="walker"></div>
      </div>
</template>

<script>
  import { TweenMax, Circ, SteppedEase, Power0 } from 'gsap'
  import ScrollMagic from 'scrollmagic'
  import 'ScrollMagicGSAP';

  export default {
    data() {
      return {
        controller: new ScrollMagic.Controller(),
      }
    },
    methods: {
      fadeIn() {
        TweenMax.to('#headline', 0.5, {
          opacity: 1,
          y: 0,
          ease: Circ.easeOut,
        });
      },
      pinContainer() {
        new ScrollMagic.Scene({
          triggerHook: 0,
          duration: 9920
        })
        .setPin('#pinned_wrapper', {pushFollowers: true})
        .addTo(this.controller);
      },
      walkIn() {
        var moveBackground = TweenMax.to('#walker', 1.0, {
          backgroundPositionX: '100%',
          ease: SteppedEase.config(6),
        });

        var moveForward = TweenMax.to('#walker', 1.0, {
          x: 100,
          ease: Power0.easeNone,
        });

        new ScrollMagic.Scene({
          duration: 200
        })
        .addTo(this.controller)
        .setTween([
          moveBackground,
          moveForward
        ]);
      },
      backgroundWalkcycle() {
        var moveBackground = TweenMax.to('#city', 1, {
          backgroundPositionX: '400%',
          ease: Power0.easeNone,
        });

        var moveSkyline = TweenMax.to('#skyline', 1, {
          backgroundPositionX: '-500px',
          ease: Power0.easeNone,
        });


        var walkcycle = TweenMax.fromTo('#walker', 1,
                                        {
          backgroundPositionX: '0%',

        },
                                        {
          backgroundPositionX: '100%',
          ease: SteppedEase.config(6),
          repeat: 20
        }
                                       );

        new ScrollMagic.Scene({
          offset: 200,
          duration: '9920px'
        })
        // .addIndicators({name: 'walkLoop'})
        .setTween(walkcycle)
        .addTo(this.controller);

        new ScrollMagic.Scene({
          offset: 200,
          duration: '9920px'
        })
        // .addIndicators({name: 'walkLoop'})
        .setTween(moveBackground)
        .addTo(this.controller);

        new ScrollMagic.Scene({
          offset: 200,
          duration: 9920
        })
        // .addIndicators({name: 'walkLoop'})
        .setTween(moveSkyline)
        .addTo(this.controller);


      },
    },
    mounted() {
      //console.log(document.documentElement.clientWidth);
      if(document.documentElement.clientWidth > 1100) {
        this.fadeIn();
        this.pinContainer();
        this.walkIn();
        this.backgroundWalkcycle();
      }
    },
  }
</script>

<style lang="scss">

$scrollmagicHeight: auto; //400px
$cityBackground: url('http://zauberwald.ultrabold.de/static/img/background.acb1581.png');
$skyBackground: linear-gradient(to bottom, rgb(155, 180, 223) 0%, rgb(221, 240, 252) 25%);
$skylineBackground: url('http://zauberwald.ultrabold.de/static/img/skyline.a23b304.png');
$walkerBackground: url('http://zauberwald.ultrabold.de/static/img/walker.305185c.png') no-repeat 0% 0%;

#headline {
  opacity: 0;
  transform: translateY(50px);
}

.column {
  padding: 0.75rem;
}

.scrollmagic-pin-spacer {
  padding: 0!important;
  width: 100%!important;
  height: auto!important;
  z-index: 103;
  margin-top: 72px!important;
}

#pinned_wrapper {
  position: relative;
  width: 100%;
  height: $scrollmagicHeight;

  #city {
    position: relative;
    width: 100%;
    height: $scrollmagicHeight;
    //background-image: $cityBackground;
    //background-repeat: repeat-x;
    //background-size: cover;
    //background-position-y: 23px;
    z-index: 10;
  }

  #sky {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $scrollmagicHeight;
    //background: $skyBackground;
    //background-repeat: no-repeat;
    //background-position-y: -11px;
    z-index: 1;
  }

  #skyline_wrapper {
    position: absolute;
    top: -20%;
    left: 0;
    width: 100%;
    height: $scrollmagicHeight;
    z-index: 5;

    #skyline{
      position: relative;
      width: 100%;
      height: $scrollmagicHeight;
      //background: $skylineBackground;
      //background-repeat: repeat-x;
      //background-size: contain;
      //background-position-y: 44px;
      //background-position-x: 0;
    }
  }

  #walker {
    background: $walkerBackground;
    position: absolute;
    height: 190px;
    width: 250px;
    left: -160px;
    top: 41%;
    transform: translateX(-200px);
    z-index: 15;
    margin-top: 20px;
  }
}
</style>
