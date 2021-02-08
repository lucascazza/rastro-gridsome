<template>
  <main class="web__content">
    <Header />
    <slot />
    <MainFooter></MainFooter>
  </main>
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
</style>