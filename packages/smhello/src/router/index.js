import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import Work from '@/components/pages/Work'
import Project from '@/components/pages/Project'

import About from '@/components/pages/About'

import Services from '@/components/pages/Services'
import ServiceOutline from '@/components/pages/ServiceOutline'

import Contact from '@/components/pages/Contact'

import ImageColumn from '@/components/pages/ImageColumn'

Vue.use(Router)

export default (base, mode) =>
  new Router({
    base,
    mode,
    routes: [
      { path: '/', components: { left: Home, right: Work }, name: 'home' },
      { path: '/project', redirect: '/', meta: { excludeFromNav: true } },
      { path: '/project/:project', components: { overlay: Project }, name: 'project', meta: { excludeFromNav: true }, props: { overlay: true } },
      { path: '/about', components: { left: About, right: ImageColumn }, name: 'about', props: { right: { image: 'https://images.unsplash.com/19/desktop.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=848&h=944&fit=crop&s=14e78d1eb88b8ebcf0cf429f3e6a20a2' } } },
      { path: '/services', components: { left: Services, right: ServiceOutline }, name: 'services' },
      { path: '/contact', components: { left: Contact, right: ImageColumn }, name: 'contact', props: { right: { image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?dpr=2&auto=format&fit=crop&w=848&h=944&q=80&cs=tinysrgb&crop=&bg=' } } },
    ],
  });
