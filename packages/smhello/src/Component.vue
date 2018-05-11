<template>
  <div>
    <section class="layout">
      <article class="left">
        <transition name="fade">
          <Navigation :to="previous" v-if="previous" :flipped="true"/>
        </transition>
        <transition name="fade" mode="out-in">
          <router-view name="left" class="page"></router-view>
        </transition>
        <transition name="fade">
          <Navigation :to="next" v-if="next" />
        </transition>
      </article>
      <article class="right">
        <transition :name="rightTransition">
          <router-view name="right" class="page"></router-view>
        </transition>
      </article>
    </section>
    <transition name="fade">
      <router-view name="overlay" class="overlay page"></router-view>
    </transition>
  </div>
</template>

<script>
//import { mapState, mapActions } from 'vuex'
import { addClass, removeClass } from './util/helpers'

import Navigation from './components/lib/Navigation'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      next: false,
      previous: false,
      rightTransition: 'slide-up',
      currentRouteIndex: undefined,
      navigationRoutes: undefined
    }
  },
  watch: {
    $route(to, from) {
      this.routeBodyClasser(to, from)
      if (!to.meta.excludeFromNav) {
        this.setNavigation()
        this.setRouteTransition(from)
      }
    },
  },
  methods: {
    routeBodyClasser(to, from) {
      const body = document.getElementsByTagName('body')[0]
      if (from) removeClass(body, from.name)
      addClass(body, to.name)
    },
    setNavigation() {
      this.currentRouteIndex = this.getRouteIndex(this.navigationRoutes, this.$route)
      const previousRoute = this.navigationRoutes.slice(0, this.currentRouteIndex).pop()
      const nextRoute = this.navigationRoutes.slice(this.currentRouteIndex + 1)[0]
      this.previous = (previousRoute) ? previousRoute.name : false
      this.next = (nextRoute) ? nextRoute.name : false
    },
    setRouteTransition(from) {
      this.rightTransition = (this.getRouteIndex(this.navigationRoutes, from) < this.currentRouteIndex)
        ? 'slide-up'
        : 'slide-down'
    },
    getRouteIndex(routes, { name }) {
      return routes.findIndex(route => route.name === name)
    },
    setNavigationRoutes() {
      this.navigationRoutes = this.$router.options.routes.filter(route => !route.meta || !route.meta.excludeFromNav)
    }
  },
  created() {
    this.routeBodyClasser(this.$route, undefined)
    this.setNavigationRoutes()
    this.setNavigation()
  }
}
</script>
