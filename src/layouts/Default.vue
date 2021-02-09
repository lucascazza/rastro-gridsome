<template>
<div data-app>
  <Header />
  <main class="web__content">
    <slot />
  </main>
</div>
  
</template>
<script>
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