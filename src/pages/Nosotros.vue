<template>
  <Layout>
    <Container tag="section" class="about-banner">
      <div class="about-banner__content">
        <div class="about-banner__content--text">
          <div>
            <h2 class="web__subtitle">¿Quiénes están atrás de <br>
              <span>Rastro?</span>
            </h2>
          </div>
        </div>
        <div class="about-banner__content--img">
          <g-image class="img-responsive" src="~/assets/web/img/about/about-banner.svg" alt="Banner About" />
        </div>
      </div>
    </Container>
    <Container tag="section" fullScreen class="about-footer-content">
      <FooterContent></FooterContent>
    </Container>
  </Layout>
</template>

<script>
import Container from '~/components/Container.vue'
import FooterContent from '~/components/FooterContent'
export default {
  components:{
    Container,
    FooterContent
  },
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style lang="scss">
  @import '~/assets/web/scss/nosotros';
</style>
