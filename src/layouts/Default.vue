<template>
  <main class="web__content">
    <Header />
    <slot />    
  </main>
</template>
<script>
import '~/assets/web/scss/web.scss'
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  },
  beforeMount: function() {
    document.body.className = 'web';
  }
}
</script>

<style>
</style>