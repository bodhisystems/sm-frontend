import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Works from '@/components/pages/Works'
import Blog from '@/components/pages/Blog'
import BlogPost from '@/components/pages/Blogpost'
import Resume from '@/components/pages/Resume'
import Contact from '@/components/pages/Contact'
import BadRoute from '@/components/pages/BadRoute'
import Styles from '@/components/pages/Styles'

Vue.use(Router)

export default (base, mode) => new Router({
  base,
  mode,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'siteHome',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/about/:name',
      name: 'aboutme',
      component: About
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      name: 'badRoute',
      component: BadRoute
    },
    {
      path: '/styles',
      name: 'styles',
      component: Styles
    }
  ]
});
