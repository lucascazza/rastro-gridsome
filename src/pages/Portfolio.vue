<template>
  <Layout>
    <Container tag="div" fullScreen class="portfolio-header">
      <Container tag="div" class="portfolio-header__options">
        <v-tabs color="#ebff29" background-color="#232323" show-arrows class="color-arrows">
          <v-tab v-for="tab in tabs" :key="tab.name">{{tab.label}}</v-tab>

          <v-tab-item v-for="item in tabsItems" :key="item.name" background-color="#232323">
            <v-container fluid>
              <v-row>
                <v-col v-for="work in item.works" :key="work.name" cols="12" md="4">
                  <v-img
                    class="portfolio-header__options--img"
                    :lazy-src="work.lazyImg" 
                    :src="work.thumbnail" 
                    aspect-ratio="1"
                    @click="openWork(work)">
                    <template v-slot:placeholder>
                      <div 
                        class="fill-height d-flex justify-center align-center" >
                        <v-progress-circular 
                          indeterminate 
                          color="#ffffff">
                        </v-progress-circular>
                      </div>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </Container>
    </Container>
    <Container tag="section" fullScreen class="portfolio-footer-content">
      <FooterContent></FooterContent>
    </Container>
    <ScrollTopButton></ScrollTopButton>
    <dialog-image
      :active.sync="showDialogImage"
      :work="workSelected"/>
    <dialog-video
      :active.sync="showDialogVideo"
      :work="workSelected"/>
    <dialog-link
      :active.sync="showDialogLink"
      :work="workSelected"/>
  </Layout>
</template>

<script>
import Container from '~/components/Container.vue';
import FooterContent from '~/components/FooterContent';
import ScrollTopButton from '~/components/ScrollTopButton';
import DialogImage from '~/components/Dialogs/DialogImage';
import DialogVideo from '~/components/Dialogs/DialogVideo';
import DialogLink from '~/components/Dialogs/DialogLink';
export default {
  components:{
    Container,
    FooterContent,
    ScrollTopButton,
    'dialog-image': DialogImage,
    'dialog-video': DialogVideo,
    'dialog-link': DialogLink
  },
  metaInfo: {
    title: 'Nuestro trabajo'
  },
  data() {
    return {
      workSelected: {},
      showDialogImage: false,
      showDialogVideo: false,
      showDialogLink: false,
      tabs: [
        {
          name: '3d',
          label: '3D'
        },
        {
          name: 'ilustracion',
          label: 'Ilustración'
        },
        {
          name: 'grafico',
          label: 'Diseño gráfico'
        },
        {
          name: 'fotomontaje',
          label: 'Fotomontaje'
        },
        {
          name: 'vfx',
          label: 'VFX'
        },
        {
          name: 'motion',
          label: 'Motion graphics'
        },
        {
          name: 'campañas',
          label: 'Campañas publicitarias'
        },
        {
          name: 'appsjuegos',
          label: 'Apps y juegos'
        },
        {
          name: 'web',
          label: 'Diseño web'
        }
      ],
      tabsItems: [
        {
          name: '3d',
          works: [
            {
              name: 'lollapalooza',
              type: 'video',
              lazyImg: '../img/portfolio/grafico/lazy/lollapalooza-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/lollapalooza-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4'
            },
            {
              name: 'callia',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/callia-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/callia-t.jpg',
              imgFull: '../img/portfolio/grafico/callia.jpg'
            },
            {
              name: 'logofolio',
              type: 'link',
              lazyImg: '../img/portfolio/grafico/lazy/logofolio-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/logofolio-t.jpg',
              imgFull: '../img/portfolio/grafico/logofolio.jpg',
              link: 'https://drive.google.com/file/d/1-V8ie9_s2eUj5NdHIinnAoJY8n_yQBW3/view?usp=sharing',
              title: 'Juego Duracell',
              description: 'Un juego de carrera en el que deberás ir agarrando pilas duracell para más energía, esquivando los obstaculos y las pilas comunes'
            },
            {
              name: 'pauline',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/pauline-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/pauline-t.jpg',
              imgFull: '../img/portfolio/grafico/pauline.jpg'
            },
            {
              name: 'temporada',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/temporada-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/temporada-t.jpg',
              imgFull: '../img/portfolio/grafico/temporadajuegos.jpg'
            }
          ]
        },
        {
          name: 'ilustracion',
          works: [
            {
              name: 'calavera',
              type: 'image',
              lazyImg: '../img/portfolio/ilustracion/lazy/calavera-l.jpg',
              thumbnail: '../img/portfolio/ilustracion/thumbnails/calavera-t.jpg',
              imgFull: '../img/portfolio/ilustracion/calavera.jpg',
              small: true
            },
            {
              name: 'chorromander',
              type: 'image',
              lazyImg: '../img/portfolio/ilustracion/lazy/chorromander-l.jpg',
              thumbnail: '../img/portfolio/ilustracion/thumbnails/chorromander-t.jpg',
              imgFull: '../img/portfolio/ilustracion/chorromander.jpg'
            },
            {
              name: 'pantuflo',
              type: 'image',
              lazyImg: '../img/portfolio/ilustracion/lazy/pantuflo-l.jpg',
              thumbnail: '../img/portfolio/ilustracion/thumbnails/pantuflo-t.jpg',
              imgFull: '../img/portfolio/ilustracion/pantuflo.jpg'
            },
            {
              name: 'psp',
              type: 'image',
              lazyImg: '../img/portfolio/ilustracion/lazy/psp-l.jpg',
              thumbnail: '../img/portfolio/ilustracion/thumbnails/psp-t.jpg',
              imgFull: '../img/portfolio/ilustracion/psp.jpg'
            },
            {
              name: 'ropa',
              type: 'image',
              lazyImg: '../img/portfolio/ilustracion/lazy/ropa-l.jpg',
              thumbnail: '../img/portfolio/ilustracion/thumbnails/ropa-t.jpg',
              imgFull: '../img/portfolio/ilustracion/ropa.jpg'
            }
          ]
        },
        {
          name: 'grafico',
          works: [
            {
              name: 'lollapalooza',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/lollapalooza-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/lollapalooza-t.jpg',
              imgFull: '../img/portfolio/grafico/lollapaloozamock.jpg'
            },
            {
              name: 'callia',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/callia-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/callia-t.jpg',
              imgFull: '../img/portfolio/grafico/callia.jpg'
            },
            {
              name: 'calliamockup',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/calliamockup-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/calliamockup-t.jpg',
              imgFull: '../img/portfolio/grafico/calliamockup.jpg'
            },
            {
              name: 'logofolio',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/logofolio-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/logofolio-t.jpg',
              imgFull: '../img/portfolio/grafico/logofolio.jpg'
            },
            {
              name: 'nnvm',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/nnvm-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/nnvm-t.jpg',
              imgFull: '../img/portfolio/grafico/nnvm.jpg'
            },
            {
              name: 'pauline',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/pauline-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/pauline-t.jpg',
              imgFull: '../img/portfolio/grafico/pauline.jpg'
            },
            {
              name: 'temporada',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/temporada-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/temporada-t.jpg',
              imgFull: '../img/portfolio/grafico/temporadajuegos.jpg'
            }
          ]
        },
        {
          name: 'fotomontaje',
          works: [
            {
              name: 'alicia',
              type: 'image',
              lazyImg: '../img/portfolio/fotomontajes/lazy/alicia-l.jpg',
              thumbnail: '../img/portfolio/fotomontajes/thumbnails/alicia-t.jpg',
              imgFull: '../img/portfolio/fotomontajes/alicia.jpg'
            },
            {
              name: 'mari',
              type: 'video',
              lazyImg: '../img/portfolio/fotomontajes/lazy/mari-l.jpg',
              thumbnail: '../img/portfolio/fotomontajes/thumbnails/mari-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'milton',
              type: 'image',
              lazyImg: '../img/portfolio/fotomontajes/lazy/milton-l.jpg',
              thumbnail: '../img/portfolio/fotomontajes/thumbnails/milton-t.jpg',
              imgFull: '../img/portfolio/fotomontajes/milton.jpg'
            },
            {
              name: 'panda',
              type: 'image',
              lazyImg: '../img/portfolio/fotomontajes/lazy/panda-l.jpg',
              thumbnail: '../img/portfolio/fotomontajes/thumbnails/panda-t.jpg',
              imgFull: '../img/portfolio/fotomontajes/panda.jpg'
            },
            {
              name: 'perfume',
              type: 'image',
              lazyImg: '../img/portfolio/fotomontajes/lazy/perfume-l.jpg',
              thumbnail: '../img/portfolio/fotomontajes/thumbnails/perfume-t.jpg',
              imgFull: '../img/portfolio/fotomontajes/perfume.jpg'
            }
          ]          
        },
        {
          name: 'vfx'
        },
        {
          name: 'motion',
          works: [
            {
              name: 'galeno',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/galeno-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/galeno-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4'
            },
            {
              name: 'jardin',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/jardin-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/jardin-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4'
            },
            {
              name: 'mapping',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/mapping-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/mapping-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4'
            },
            {
              name: 'nnv',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/nnv-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/nnv-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4'
            },
            {
              name: 'shiafu',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/shiafu-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/shiafu-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4'
            }
          ]
        },
        {
          name: 'campañas'
        },
        {
          name: 'appsjuegos',
          works: [
            {
              name: 'duracell',
              type: 'link',
              lazyImg: '../img/portfolio/appsjuegos/lazy/duracell-l.jpg',
              thumbnail: '../img/portfolio/appsjuegos/thumbnails/duracell-t.jpg',
              imgFull: '../img/portfolio/appsjuegos/duracell.jpg',
              imgFullVert: '../img/portfolio/appsjuegos/duracellvert.jpg',
              link: 'https://drive.google.com/file/d/1-V8ie9_s2eUj5NdHIinnAoJY8n_yQBW3/view?usp=sharing',
              title: 'Juego Duracell',
              description: 'Un juego de carrera en el que deberás ir agarrando pilas duracell para sumar energía, esquivando los obstaculos y las pilas comunes'
            },
          ]
        },
        {
          name: 'web',
          works: [
            {
              name: 'agrodreams',
              type: 'image',
              lazyImg: '../img/portfolio/web/lazy/agrodreams-l.jpg',
              thumbnail: '../img/portfolio/web/thumbnails/agrodreams-t.jpg',
              imgFull: '../img/portfolio/web/agrodreams.jpg',
              btn: 'https://agrodreams.com/'
            },
            {
              name: 'landing',
              type: 'image',
              lazyImg: '../img/portfolio/web/lazy/landing-l.jpg',
              thumbnail: '../img/portfolio/web/thumbnails/landing-t.jpg',
              imgFull: '../img/portfolio/web/landing.jpg'
            },
            {
              name: 'subastas',
              type: 'image',
              lazyImg: '../img/portfolio/web/lazy/subastas-l.jpg',
              thumbnail: '../img/portfolio/web/thumbnails/subastas-t.jpg',
              imgFull: '../img/portfolio/web/subastas.jpg',
              btn: 'https://subastas.bancociudad.com.ar/'
            },
            {
              name: 'aqualine',
              type: 'image',
              lazyImg: '../img/portfolio/web/lazy/aqualine-l.jpg',
              thumbnail: '../img/portfolio/web/thumbnails/aqualine-t.jpg',
              imgFull: '../img/portfolio/web/aqualine.jpg',
              btn: 'http://www.aqualine.com.ar/'
            },
            {
              name: 'braunybraun',
              type: 'image',
              lazyImg: '../img/portfolio/web/lazy/braunybraun-l.jpg',
              thumbnail: '../img/portfolio/web/thumbnails/braunybraun-t.jpg',
              imgFull: '../img/portfolio/web/braunybraun.jpg',
              btn: 'http://www.braunybraun.com/es/'
            }
          ] 
        }
      ]
    };
  },
  methods: {
    openWork(work) {
      this.workSelected = work
      if (work.type == 'image') {
        this.showDialogImage = true
      } else if (work.type == 'video') {
        this.showDialogVideo = true
      } else if (work.type == 'link') {
        this.showDialogLink = true
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/web/scss/portfolio';
</style>
