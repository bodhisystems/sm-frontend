import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Works from '@/components/pages/Works'
import Blog from '@/components/pages/Blog'
import Contact from '@/components/pages/Contact'
import BadRoute from '@/components/pages/BadRoute'

Vue.use(Router)


export default (base, mode) =>
  new Router({
    base,
    mode,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
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
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      {
        path: '*',
        name: 'badRoute',
        component: BadRoute
      }
    ]
  });
