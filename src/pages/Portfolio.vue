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
              name: 'groot',
              type: 'video',
              lazyImg: '../img/portfolio/modelados/lazy/groot-l.jpg',
              thumbnail: '../img/portfolio/modelados/thumbnails/groot-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'calle',
              type: 'image',
              lazyImg: '../img/portfolio/modelados/lazy/calle-l.jpg',
              thumbnail: '../img/portfolio/modelados/thumbnails/calle-t.jpg',
              imgFull: '../img/portfolio/modelados/calle.jpg'
            },
            {
              name: 'finn',
              type: 'image',
              lazyImg: '../img/portfolio/modelados/lazy/finn-l.jpg',
              thumbnail: '../img/portfolio/modelados/thumbnails/finn-t.jpg',
              imgFull: '../img/portfolio/modelados/finn.jpg'
            },
            {
              name: 'dron',
              type: 'video',
              lazyImg: '../img/portfolio/modelados/lazy/dron-l.jpg',
              thumbnail: '../img/portfolio/modelados/thumbnails/dron-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'gopro',
              type: 'video',
              lazyImg: '../img/portfolio/modelados/lazy/gopro-l.jpg',
              thumbnail: '../img/portfolio/modelados/thumbnails/gopro-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'cereales',
              type: 'video',
              lazyImg: '../img/portfolio/modelados/lazy/cereales-l.jpg',
              thumbnail: '../img/portfolio/modelados/thumbnails/cereales-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
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
          name: 'vfx',
          works: [
            {
              name: 'taza',
              type: 'video',
              lazyImg: '../img/portfolio/vfx/lazy/taza-l.jpg',
              thumbnail: '../img/portfolio/vfx/thumbnails/taza-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'trip',
              type: 'video',
              lazyImg: '../img/portfolio/vfx/lazy/trip-l.jpg',
              thumbnail: '../img/portfolio/vfx/thumbnails/trip-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'barco',
              type: 'video',
              lazyImg: '../img/portfolio/vfx/lazy/barco-l.jpg',
              thumbnail: '../img/portfolio/vfx/thumbnails/barco-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'milton',
              type: 'video',
              lazyImg: '../img/portfolio/vfx/lazy/milton-l.jpg',
              thumbnail: '../img/portfolio/vfx/thumbnails/milton-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'paladin',
              type: 'video',
              lazyImg: '../img/portfolio/vfx/lazy/paladin-l.jpg',
              thumbnail: '../img/portfolio/vfx/thumbnails/paladin-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            }
          ] 
        },
        {
          name: 'motion',
          works: [
            {
              name: 'galeno',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/galeno-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/galeno-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'jardin',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/jardin-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/jardin-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'mapping',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/mapping-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/mapping-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'nnv',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/nnv-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/nnv-t.jpg',
              link: '../media/fotomontaje-home.mp4'
            },
            {
              name: 'shiafu',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/shiafu-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/shiafu-t.jpg',
              link: '../media/fotomontaje-home.mp4'
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
              name: 'agrodreams',
              type: 'link',
              lazyImg: '../img/portfolio/appsjuegos/lazy/agrodreams-l.jpg',
              thumbnail: '../img/portfolio/appsjuegos/thumbnails/agrodreams-t.jpg',
              imgFull: '../img/portfolio/appsjuegos/agrodreams.jpg',
              imgFullVert: '../img/portfolio/appsjuegos/agrodreamsvert.jpg',
              link: 'https://app.agrodreams.com/',
              title: 'Agrodreams app',
              description: 'Agrodreams es un software multiplataforma de agricultura de precisión que permite observar e identificar la variabilidad espacial del cultivo, detectar en forma preventiva el estado de vigorosidad de las plantas, mapear zonas y ambientes en el campo, diseñar planes de monitoreo dirigido, realizar tratamientos mediante aplicaciones variables y focalizadas de agroinsumos, para mejorar y hacer más inteligente el cuidado y la protección de los cultivos.'
            },
            {
              name: 'duracell',
              type: 'link',
              lazyImg: '../img/portfolio/appsjuegos/lazy/duracell-l.jpg',
              thumbnail: '../img/portfolio/appsjuegos/thumbnails/duracell-t.jpg',
              imgFull: '../img/portfolio/appsjuegos/duracell.jpg',
              imgFullVert: '../img/portfolio/appsjuegos/duracellvert.jpg',
              dificultad: 4.5,
              link: 'https://drive.google.com/file/d/1-V8ie9_s2eUj5NdHIinnAoJY8n_yQBW3/view?usp=sharing',
              title: 'Duracell El Juego',
              description: 'Un juego de carrera en el que deberás agarrar pilas duracell para sumar energía, mientras esquivas los obstaculos y las pilas comunes.'
            },
            {
              name: 'yogurisimo',
              type: 'link',
              lazyImg: '../img/portfolio/appsjuegos/lazy/yogurisimo-l.jpg',
              thumbnail: '../img/portfolio/appsjuegos/thumbnails/yogurisimo-t.jpg',
              imgFull: '../img/portfolio/appsjuegos/yogurisimo.jpg',
              imgFullVert: '../img/portfolio/appsjuegos/yogurisimovert.jpg',
              dificultad: 3.5,
              link: 'https://drive.google.com/file/d/1QXyGDgjSmpRjbYUqnIgi65rRlULbUrl0/view?usp=sharing',
              title: 'Yogurisimo Rusia 2018',
              description: 'Un juego de persecución. Tendrás que recolectar los cereales y Yogurisimos para sumar puntos. ¡Pero cuidado! que Pachorra no te atrape.'
            },
            {
              name: 'agendapp',
              type: 'link',
              lazyImg: '../img/portfolio/appsjuegos/lazy/agendapp-l.jpg',
              thumbnail: '../img/portfolio/appsjuegos/thumbnails/agendapp-t.jpg',
              imgFull: '../img/portfolio/appsjuegos/agendapp.jpg',
              imgFullVert: '../img/portfolio/appsjuegos/agendappvert.jpg',
              link: 'https://drive.google.com/file/d/1yGzYj1RivjoiuDvSzxLfw4zT5wpVP7Ty/view?usp=sharing',
              title: 'Agendapp',
              description: 'Una aplicación muy útil con una interfaz intuitiva con la que podrás crear notas y recordatorios por categorías personalizadas.'
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
