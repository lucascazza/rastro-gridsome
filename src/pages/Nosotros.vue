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
          <g-image class="img-responsive" src="~/assets/web/img/about/banner-about.png" alt="Banner About" />
        </div>
      </div>
    </Container>
    <Container fullScreen tag="div" class="fondo-filosofia">
      <Container tag="section" class="about-filosofia">
        <div class="about-filosofia__img">
          <g-image class="img-responsive" src="~/assets/web/img/about/filosofia-about.png" alt="Image About" />
        </div>
        <div class="about-filosofia__text">
          <h2 class="web__subtitle">Nuestra filosofía</h2>
          <p class="web__text">Impulsamos el movimiento, y el aprendizaje. No nos limitamos, avanzamos con
            determinación.
            Creemos que el aprendizaje surge cuando no existe miedo a experimentar.
            Rastro no es solo la evidencia de que estuvimos, si no de que estamos adelante. Es animarse a más, moverse,
            transformarse. Ir hacia lo desconocido.</p>
          <p class="web__text strong">Somos dinámicos, y urbanos. Somos Rastro.</p>
        </div>
      </Container>
    </Container>
    <Container tag="section" fullScreen class="about-content">
      <div class="about-content__text-principal">
        <h2 class="web__subtitle">5 pibxs con convicciones</h2>
        <p class="web__text">Un grupo de chicos con ancias de crecer, de desenvolverse, de estar en constante
          aprendizaje, pero por sobre todo, con ganas de diseñar.</p>
      </div>
      <Container tag="div">
        <div class="about">
          <div class="about__row">
            <div class="about__card">
              <div class="about__card--img">
                <g-image src="~/assets/web/img/about/fotos/lucas.jpg" alt="Lucas Scazzariello" />
              </div>
              <div class="about__card--text">
                <h2 class="web__subtitle">Lucas Scazzariello</h2>
                <p class="web__text strong">Diseñador y desarrollador web</p>
                <p class="web__text">El encargado de dejar la huella de <span>rastro</span> en cada web y app en la que
                  estemos trabajando.</p>
              </div>
            </div>
          </div>
          <div class="about__row">
            <div class="about__card">
              <div class="about__card--img">
                <g-image src="~/assets/web/img/about/fotos/manu.jpg" alt="Manu Messina" />
              </div>
              <div class="about__card--text">
                <h2 class="web__subtitle">Manu Messina</h2>
                <p class="web__text strong">Artista VFX - Audiovisual</p>
                <p class="web__text">El especialista en efectos visuales, un rol importantísimo para darle <span>vida y
                    magia</span> a nuestras piezas audiovisuales.</p>
              </div>
            </div>
          </div>
          <div class="about__row">
            <div class="about__card">
              <div class="about__card--img">
                <g-image src="~/assets/web/img/about/fotos/mari.jpg" alt="Marian Esain" />
              </div>
              <div class="about__card--text">
                <h2 class="web__subtitle">Marian Esain</h2>
                <p class="web__text strong">Diseñadora gráfica</p>
                <p class="web__text">La comunicadora visual que convierte nuestras <span>ideas en el arte</span> que
                  vemos día a día.</p>
              </div>
            </div>
          </div>
          <div class="about__row">
            <div class="about__card">
              <div class="about__card--img">
                <g-image src="~/assets/web/img/about/fotos/javi.jpg" alt="Javier Silva" />
              </div>
              <div class="about__card--text">
                <h2 class="web__subtitle">Javi Silva</h2>
                <p class="web__text strong">Ilustrador digital</p>
                <p class="web__text">Nuestro caballito de batalla: tan multimedial como se puede hacer, <span>un
                    artista</span> que se adapta a todo lo que haya que hacer y un ilustrador alucinante.</p>
              </div>
            </div>
          </div>
          <div class="about__row">
            <div class="about__card">
              <div class="about__card--img">
                <g-image src="~/assets/web/img/about/fotos/jejo.jpg" alt="Alejo Mordini" />
              </div>
              <div class="about__card--text">
                <h2 class="web__subtitle">Jejo Mordini</h2>
                <p class="web__text strong">Diseñador UX/UI</p>
                <p class="web__text">El responsable de mejorar las experiencias. Gracias a su ojo crítico, <span>mide y
                    optimiza</span> cada uno de los procesos creativos.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
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
