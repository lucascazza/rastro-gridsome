// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
require('typeface-open-sans')
require('typeface-roboto')
require('typeface-montserrat')
import '../static/icons/rastroicons.css'
import '~/assets/web/scss/web.scss'

Vue.use(Vuex)
Vue.use(Vuetify)

export default function (Vue, { appOptions, head }) {
  Vue.config.productionTip = false
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  head.script.push({
    src: './js/dragscroll.js',
    body: false
  })
  
  const opts = {} //opts includes, vuetify themes, icons, etc.
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}