<template>
<div data-app>
  <Header />
  <main class="web__content">
    <slot/>
  </main>
  <MainFooter/>
</div>
  
</template>
<script>
import Header from '~/components/Header.vue'
import MainFooter from '~/components/MainFooter.vue'
export default {
  components: {
    Header,
    MainFooter
  },
  beforeMount: function() {
    document.body.className = 'web';
  }
}
</script>

<style>
.web__content{
  min-height: 100vh !important;
}
</style>