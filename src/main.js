// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
require('typeface-open-sans')
require('typeface-roboto')
require('typeface-montserrat')
import '../static/icons/rastroicons.css'

export default function (Vue, { router, head, isClient }) { 
  Vue.use(Vuex)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
