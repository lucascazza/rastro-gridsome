<template>
  <Layout>
    <Container tag="div" fullScreen class="portfolio-header">
    </Container>
    <Container tag="section" fullScreen class="portfolio-footer-content">
      <FooterContent></FooterContent>
    </Container>
    <ScrollTopButton></ScrollTopButton>
  </Layout>
</template>

<script>
import Container from '~/components/Container.vue'
import FooterContent from '~/components/FooterContent'
import ScrollTopButton from '~/components/ScrollTopButton'
export default {
  components:{
    Container,
    FooterContent,
    ScrollTopButton
  },
  metaInfo: {
    title: 'Nuestro trabajo'
  }
}
</script>

<style lang="scss">
  @import '~/assets/web/scss/portfolio';
</style>
