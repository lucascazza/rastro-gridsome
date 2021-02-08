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
    <Container tag="section" class="about-filosofia">
      <div class="about-filosofia__img">
        <g-image class="img-responsive" src="~/assets/web/img/about/about-img.svg" alt="Image About" />
      </div>
      <div class="about-filosofia__text">
        <h2 class="web__subtitle">Nuestra filosofía</h2>
        <p class="web__text">Impulsamos el movimiento, y el aprendizaje. No nos limitamos, avanzamos con determinación. Creemos que el aprendizaje surge cuando no existe miedo a experimentar.
Rastro no es solo la evidencia de que estuvimos, si no de que estamos adelante. Es animarse a más, moverse, transformarse. Ir hacia lo desconocido.</p>
<p class="web__text strong">Somos dinámicos, y urbanos. Somos Rastro.</p>
      </div>
    </Container>
    <Container tag="section" fullScreen class="about-content">
      <div class="about-content__text-principal">
        <h2 class="web__subtitle">5 pibxs con convicciones</h2>
        <p class="web__text">Un grupo de chicos con ancias de crecer, de desenvolverse, de estar en constante aprendizaje, pero por sobre todo, con ganas de diseñar.</p>   
      </div>   
      <div class="about">
        <div class="about__row-1">
          <div class="about__feature about__feature--1">
            <g-image src="~/assets/web/img/about/circulo.svg" alt="Circulo" />
            <div class="about__row-text">
              <h2 class="web__subtitle">Lucas Scazzariello</h2>
              <p class="web__text strong">Web Desing & Developer.</p>
              <p class="web__text">El encargado de dejar la huella de <span>RASTRO</span> en cada web/app en la que nos toque trabajar.</p>
            </div>
          </div>
          <div class="about__feature about__feature--2">
            <g-image src="~/assets/web/img/about/circulo.svg" alt="Circulo" />
            <div class="about__row-text">
              <h2 class="web__subtitle">Manu Messina</h2>
              <p class="web__text strong">Web Desing & Developer.</p>
              <p class="web__text">El encargado de dejar la huella de <span>RASTRO</span> en cada web/app en la que nos toque diseñar.</p>
            </div>
          </div>
          <div class="about__feature about__feature--3">
            <g-image src="~/assets/web/img/about/circulo.svg" alt="Circulo" />
            <div class="about__row-text">
              <h2 class="web__subtitle">Marian Esain</h2>
              <p class="web__text strong">Web Desing & Developer.</p>
              <p class="web__text">El encargado de dejar la huella de <span>RASTRO</span> en cada web/app en la que nos toque diseñar.</p>
            </div>
          </div>
        </div>
        <div class="about__row-2">
          <div class="about__feature about__feature--1">
            <g-image src="~/assets/web/img/about/circulo.svg" alt="Circulo" />
            <div class="about__row-text">
              <h2 class="web__subtitle">Jejo Mordini</h2>
              <p class="web__text strong">Web Desing & Developer.</p>
              <p class="web__text">El encargado de dejar la huella de <span>RASTRO</span> en cada web/app en la que nos toque diseñar.</p>
            </div>
          </div>
          <div class="about__feature about__feature--2">
            <g-image src="~/assets/web/img/about/circulo.svg" alt="Circulo" />
            <div class="about__row-text">
              <h2 class="web__subtitle">Javi Silva</h2>
              <p class="web__text strong">Web Desing & Developer.</p>
              <p class="web__text">El encargado de dejar la huella de <span>RASTRO</span> en cada web/app en la que nos toque diseñar.</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Container tag="section" fullScreen class="about-grid">
      <g-image src="~/assets/web/img/about/logo-grilla.svg" alt="Grilla" />
    </Container>
    <Container tag="section" fullScreen class="about-footer-content">
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
    title: 'Sobre nosotros'
  }
}
</script>

<style lang="scss">
  @import '~/assets/web/scss/nosotros';
</style>
