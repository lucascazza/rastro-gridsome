<template>
<div data-app>
  <Header />
  <slot/>
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