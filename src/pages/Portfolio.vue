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
    <MainFooter />
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
import MainFooter from '~/components/MainFooter';
import DialogImage from '~/components/Dialogs/DialogImage';
import DialogVideo from '~/components/Dialogs/DialogVideo';
import DialogLink from '~/components/Dialogs/DialogLink';
export default {
  components:{
    Container,
    FooterContent,
    ScrollTopButton,
    MainFooter,
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
          name: 'appjuegos',
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
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4',
              title: 'Timeline Lollapalooza',
              description: 'Timeline Lollapalooza'
            },
            {
              name: 'callia',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/callia-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/callia-t.jpg',
              imgFull: '../img/portfolio/grafico/callia.jpg',
              title: 'Callia',
              description: 'Callia description'
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
              imgFull: '../img/portfolio/grafico/pauline.jpg',
              title: 'Pauline',
              description: 'Pauline description'
            },
            {
              name: 'temporada',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/temporada-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/temporada-t.jpg',
              imgFull: '../img/portfolio/grafico/temporadajuegos.jpg',
              title: 'Temporada de juegos',
              description: 'Temporada de juegos description'
            }
          ]
        },
        {
          name: 'ilustracion',
          works: []          
        },
        {
          name: 'grafico',
          works: [
            {
              name: 'lollapalooza',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/lollapalooza-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/lollapalooza-t.jpg',
              imgFull: '../img/portfolio/grafico/lollapalooza.jpg',
              title: 'Timeline Lollapalooza',
              description: 'Timeline Lollapalooza.'
            },
            {
              name: 'callia',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/callia-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/callia-t.jpg',
              imgFull: '../img/portfolio/grafico/callia.jpg',
              title: 'Callia',
              description: 'Callia description.'
            },
            {
              name: 'logofolio',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/logofolio-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/logofolio-t.jpg',
              imgFull: '../img/portfolio/grafico/logofolio.jpg',
              title: 'Logofolio',
              description: 'Logofolio description.'
            },
            {
              name: 'pauline',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/pauline-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/pauline-t.jpg',
              imgFull: '../img/portfolio/grafico/pauline.jpg',
              title: 'Pauline',
              description: 'Pauline description.'
            },
            {
              name: 'temporada',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/temporada-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/temporada-t.jpg',
              imgFull: '../img/portfolio/grafico/temporadajuegos.jpg',
              title: 'Temporada de juegos',
              description: 'Temporada de juegos description.'
            }
          ]
        },
        {
          name: 'fotomontaje'
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
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4',
              title: 'Galeno',
              description: 'Motion Galeno.'
            },
            {
              name: 'jardin',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/jardin-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/jardin-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4',
              title: 'Jardin Modelo',
              description: 'Jardin Modelo video institucional.'
            },
            {
              name: 'mapping',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/mapping-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/mapping-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4',
              title: 'Mapping',
              description: 'Motion Mapping en 3 esferas.'
            },
            {
              name: 'nnv',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/nnv-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/nnv-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4',
              title: 'NNV+',
              description: 'NNV+ animación de logo.'
            },
            {
              name: 'shiafu',
              type: 'video',
              lazyImg: '../img/portfolio/motion/lazy/shiafu-l.jpg',
              thumbnail: '../img/portfolio/motion/thumbnails/shiafu-t.jpg',
              link: 'https://www.youtube.com/embed/UeN0Peiz9w4',
              title: 'Shiafu logo',
              description: 'Shiafu animación de logo.'
            }
          ]
        },
        {
          name: 'campañas'
        },
        {
          name: 'appjuegos'
        },
        {
          name: 'web'
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
