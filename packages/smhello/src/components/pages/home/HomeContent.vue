<template>
  <div class="home-content">

      <div class="row home-content__main">


          <h3>{{ $t('content.home.hero.greeting', {'welcomeText': 'hello there & namaste'}) }}</h3>

          <h1>{{ $t('content.home.hero.quote') }}</h1>

          <div class="home-content__buttons">
              <a href="#works" class="smoothscroll btn btn--stroke">
                  {{ $t('content.home.hero.cta-latest-projects') }}
              </a>
              <a href="#about" class="smoothscroll btn btn--stroke">
                  {{ $t('content.home.hero.cta-more-about-me') }}
              </a>
          </div>

          <scrollactive class="home-content__scroll" :duration="2000">
              <a href="#about" class="scroll-link scrollactive-item">
                  <span>{{ $t('content.home.hero.link-scroll-down') }}</span>
              </a>

          </scrollactive>

      </div>

  </div>
</template>
