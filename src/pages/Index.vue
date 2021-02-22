<template>
  <Layout>
    <ClientOnly>
      <Scrollama @step-enter="stepEnterHandler" :offset="0.5">
        <Container tag="div" fullScreen class="home-banner" id="step1" data-step="a">
          <Container tag="section">
            <div class="home-banner__content">
              <div class="home-banner__content--text">
                <div>
                  <h2 class="web__subtitle">Agencia Multimedia</h2>
                  <h1 class="web__title">Somos <br v-if="!isMobile"><span>Rastro</span></h1>
                </div>
                <p v-if="!isMobile" class="web__text">Rastro no es solo la evidencia de que estuvimos, si no de que
                  estamos
                  adelante. Es animarse a más, moverse, transformarse. Ir hacia lo desconocido.</p>
              </div>
              <div class="home-banner__content--img">
                <g-image class="img-responsive" src="~/assets/web/img/home/banner-home.svg" alt="Banner Home" />
              </div>
              <div class="home-banner__content--text-mobile" v-if="isMobile">
                <p class="web__text">Rastro no es solo la evidencia de que estuvimos, si no de que estamos adelante. Es
                  animarse a más, moverse, transformarse. Ir hacia lo desconocido.</p>
              </div>
            </div>
          </Container>
        </Container>
        <Container tag="div" fullScreen class="home-paso" id="step2" data-step="b">
          <h2 class="web__subtitle home-paso__title">Un paso adelante</h2>
          <Container tag="section" class="home-paso__content">
            <div class="home-paso__content--text">
              <h2 class="web__subtitle">Diversidad de trabajos</h2>
              <p class="web__text">No nos encerramos y apostamos a todo tipo de trabajo siempre que haya que ser
                creativos.</p>
              <div class="home-paso__content--options" v-if="!isMobile">
                <ul class="options-list">
                  <li class="options-list__item" :class="{'active' : stepTrabajos == 1}" @click="stepTrabajos = 1">
                    
                    <i class="icon-3d svg-1"></i>
                    <i class="icon-3d svg-2"></i>

                    Modelados 3d</li>
                  <li class="options-list__item" :class="{'active' : stepTrabajos == 2}" @click="stepTrabajos = 2">
                                      
                    <i class="icon-3d svg-1"></i>
                    <i class="icon-3d svg-2"></i>

                    VFX</li>
                  <li class="options-list__item" :class="{'active' : stepTrabajos == 3}" @click="stepTrabajos = 3">
                    
                    <i class="icon-3d svg-1"></i>
                    <i class="icon-3d svg-2"></i>
                    
                    Fotomontajes</li>
                  <li class="options-list__item" :class="{'active' : stepTrabajos == 4}" @click="stepTrabajos = 4">
                    
                    <i class="icon-3d svg-1"></i>
                    <i class="icon-3d svg-2"></i>
                    
                    Ilustraciones</li>
                </ul>
              </div>
            </div>
            <div class="home-paso__content--img">
              <video v-show="stepTrabajos == 1" autoplay muted loop>
                <source src="media/3d-home.mp4" type="video/mp4">
              </video>
              <video v-show="stepTrabajos == 2" autoplay muted loop>
                <source src="media/vfx-home.mp4" type="video/mp4">
              </video>
              <video v-show="stepTrabajos == 3" autoplay muted loop>
                <source src="media/fotomontaje-home.mp4" type="video/mp4">
              </video>
              <video v-show="stepTrabajos == 4" autoplay muted loop>
                <source src="media/ilustracion-home.mp4" type="video/mp4">
              </video>
            </div>
            <div v-if="isMobile">
              <div class="home-paso__content--options-mobile">
                <div class="item-col">
                  <div class="item-col__item" :class="{'active' : stepTrabajos == 1}" @click="stepTrabajos = 1">
                    <i class="icon-3d"></i>
                  </div>
                </div>
                <div class="item-col">
                  <div class="item-col__item" :class="{'active' : stepTrabajos == 2}" @click="stepTrabajos = 2">
                    <i class="icon-3d"></i>
                  </div>
                </div>
                <div class="item-col">
                  <div class="item-col__item" :class="{'active' : stepTrabajos == 3}" @click="stepTrabajos = 3">
                    <i class="icon-3d"></i>
                  </div>
                </div>
                <div class="item-col">
                  <div class="item-col__item" :class="{'active' : stepTrabajos == 4}" @click="stepTrabajos = 4">
                    <i class="icon-3d"></i>
                  </div>
                </div>
              </div>
              <h3 class="home-paso__content--title" v-if="stepTrabajos == 1">Modelos 3D</h3>
              <h3 class="home-paso__content--title" v-if="stepTrabajos == 2">Efectos visuales</h3>
              <h3 class="home-paso__content--title" v-if="stepTrabajos == 3">Fotomontajes</h3>
              <h3 class="home-paso__content--title" v-if="stepTrabajos == 4">Ilustraciones</h3>
            </div>
          </Container>
        </Container>
        <Container tag="div" class="home-adaptar" id="step3" data-step="c">
          <div class="home-adaptar__text">
            <h2 class="web__subtitle">Nos adaptamos</h2>
            <p class="web__text">Sabemos que nuestros clientes necesitan llegar a todos los usuarios, y eso no es un
              freno
              para nosotros.</p>
          </div>
          <div class="home-adaptar__img">
            <g-image class="img-laptop" src="~/assets/web/img/home/adaptar/laptop-celu.svg" alt="Laptop" />
            <g-image v-if="stepImage == 1" class="img-fondo" src="~/assets/web/img/home/adaptar/agrodreams.png" alt="Agrodreams" />
            <g-image v-if="stepImage == 2" class="img-fondo" src="~/assets/web/img/home/adaptar/subastas.png" alt="Subastas Banco Ciudad" />
            <g-image v-if="stepImage == 3" class="img-fondo" src="~/assets/web/img/home/adaptar/aqualine.png" alt="Aqualine" />
            <g-image class="img-background" src="~/assets/web/img/home/fondo-adaptar.svg" alt="Fondo adaptar" />
          </div>
          <div class="stepsImages" v-if="!isMobile">
            <div class="stepsImages__steps">
              <div class="stepsImages__steps--point" :class="{'active': stepImage == 1}" @click="stepImage = 1">
              </div>
              <div class="stepsImages__steps--point" :class="{'active': stepImage == 2}" @click="stepImage = 2">
              </div>
              <div class="stepsImages__steps--point" :class="{'active': stepImage == 3}" @click="stepImage = 3">
              </div>
            </div>
          </div>
        </Container>
        <Container tag="div" fullScreen class="home-movimiento" id="step4" data-step="d">
          <Container tag="section" class="home-movimiento__content">
            <div class="home-movimiento__content--text">
              <h2 class="web__subtitle">Movimiento y aprendizaje</h2>
              <p class="web__text">No nos limitamos, avanzamos con determinación. Creemos que el aprendizaje surge
                cuando no existe miedo a experimentar.</p>
            </div>
            <div class="home-movimiento__content--items">
              <p class="web__text">Para aprender:</p>
              <div class="movimiento-items">
                <div class="movimiento-items__item">
                  <div class="movimiento-items__item--img">
                    <g-image src="~/assets/web/img/home/movimiento/mente-nb.png" alt="Abrí la mente" />
                  </div>
                  <p class="web__text">Abrí la mente</p>
                </div>
                <div class="movimiento-items__item">
                  <div class="movimiento-items__item--img">
                    <g-image src="~/assets/web/img/home/movimiento/moverse-nb.png" alt="Hay que moverse" />
                  </div>
                  <p class="web__text">Hay que moverse</p>
                </div>
                <div class="movimiento-items__item">
                  <div class="movimiento-items__item--img">
                    <g-image src="~/assets/web/img/home/movimiento/caerte-nb.png" alt="Podés caerte" />
                  </div>
                  <p class="web__text">Podés caerte</p>
                </div>
                <div class="movimiento-items__item">
                  <div class="movimiento-items__item--img">
                    <g-image src="~/assets/web/img/home/movimiento/atreverse-nb.png" alt="Hay que atreverse" />
                  </div>
                  <p class="web__text">Hay que atreverse</p>
                </div>
              </div>
            </div>
          </Container>
        </Container>
        <Container tag="div" fullScreen id="step5" data-step="e" class="home-footer-content">
          <FooterContent></FooterContent>
        </Container>
        <div class="steps-home" v-if="!isMobile">
          <div class="steps-home__steps">
            <div class="steps-home__steps--point" :class="{'active': stepHome == 'a'}" @click="selectStep('step1')">
            </div>
            <div class="steps-home__steps--point" :class="{'active': stepHome == 'b'}" @click="selectStep('step2')">
            </div>
            <div class="steps-home__steps--point" :class="{'active': stepHome == 'c'}" @click="selectStep('step3')">
            </div>
            <div class="steps-home__steps--point" :class="{'active': stepHome == 'd'}" @click="selectStep('step4')">
            </div>
            <div class="steps-home__steps--point" :class="{'active': stepHome == 'e'}" @click="selectStep('step5')">
            </div>
          </div>
        </div>
        <ScrollTopButton></ScrollTopButton>
      </Scrollama>
    </ClientOnly>
  </Layout>
</template>

<script>
import "intersection-observer";
import Container from '~/components/Container.vue';
import FooterContent from '~/components/FooterContent';
import ScrollTopButton from '~/components/ScrollTopButton'
export default {
  components: {
    Container,
    FooterContent,
    ScrollTopButton,
    Scrollama: () => 
      import('vue-scrollama')
      .then(Component => Component)
      .catch()
  },
  metaInfo: {
    title: "Rastro creatividad"
  },
  beforeMount(){
    if(process.isClient){
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },  
  beforeDestroy(){
    if(process.isClient){
      window.removeEventListener('resize', this.handleResize)
    }
  },
  computed:{
    isMobile(){
      return this.windowWidth < 992
    }
  },
  data(){
    return{
      windowWidth: 0,
      stepHome: 'a',
      stepTrabajos: 1,
      stepImage: 1
    }
  },
  mounted() {
    setInterval(() => {
      if (this.stepImage == 3) {
        this.stepImage = 1
      } else {
        this.stepImage += 1
      }
    }, 5000);
  },
  methods: {
    stepEnterHandler ({element, index, direction}) {
      this.stepHome = element.dataset.step
    },
    handleResize() {
      if(process.isClient){
        this.windowWidth = window.innerWidth;
      }
    },
    selectStep(step){
      let scroll = document.getElementById(step).getBoundingClientRect().top
      window.scroll(0, scroll + window.scrollY - 50)
    }
  }
};
</script>
<style src="vue-scrollama/dist/vue-scrollama.css"></style>
<style lang="scss">
  @import '~/assets/web/scss/home';
</style>
