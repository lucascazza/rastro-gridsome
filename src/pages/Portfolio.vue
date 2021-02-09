<template>
  <Layout>
    <Container tag="div" fullScreen class="portfolio-header">
      <Container tag="div" class="portfolio-header__options">
        <v-tabs color="#ebff29" background-color="#232323" show-arrows class="color-arrows">
          <v-tab v-for="tab in tabs" :key="tab.name">{{tab.label}}</v-tab>

          <v-tab-item v-for="item in tabsItems" :key="item.name" background-color="#232323">
            <v-container fluid>
              <v-row>
                <v-col v-for="work in item.trabajos" :key="work.name" cols="12" md="4">
                  <v-img 
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
      :active.sync="dialogImageOn"
      :work="workSelected"
      @confirm="back()" />
  </Layout>
</template>

<script>
import Container from '~/components/Container.vue'
import FooterContent from '~/components/FooterContent'
import ScrollTopButton from '~/components/ScrollTopButton'
import DialogImage from '~/components/Dialogs/DialogImage';
export default {
  components:{
    Container,
    FooterContent,
    ScrollTopButton,
    'dialog-image': DialogImage
  },
  metaInfo: {
    title: 'Nuestro trabajo'
  },
  data() {
    return {
      workSelected: {},
      dialogImageOn: false,
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
          trabajos: [
            {
              name: 'lollapalooza',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/lollapalooza-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/lollapalooza-t.jpg',
              imgFull: '../img/portfolio/grafico/lollapalooza.jpg',
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
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/logofolio-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/logofolio-t.jpg',
              imgFull: '../img/portfolio/grafico/logofolio.png',
              title: 'Logofolio',
              description: 'Logofolio description'
            },
            {
              name: 'pauline',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/pauline-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/pauline-t.jpg',
              imgFull: '../img/portfolio/grafico/pauline.png',
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
          trabajos: [
            {
              name: 'lollapalooza',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/lollapalooza-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/lollapalooza-t.jpg',
              imgFull: '../img/portfolio/grafico/lollapalooza.jpg',
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
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/logofolio-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/logofolio-t.jpg',
              imgFull: '../img/portfolio/grafico/logofolio.png',
              title: 'Logofolio',
              description: 'Logofolio description'
            },
            {
              name: 'pauline',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/pauline-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/pauline-t.jpg',
              imgFull: '../img/portfolio/grafico/pauline.png',
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
          name: 'grafico',
          trabajos: [
            {
              name: 'lollapalooza',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/lollapalooza-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/lollapalooza-t.jpg',
              imgFull: '../img/portfolio/grafico/lollapalooza.jpg',
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
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/logofolio-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/logofolio-t.jpg',
              imgFull: '../img/portfolio/grafico/logofolio.png',
              title: 'Logofolio',
              description: 'Logofolio description'
            },
            {
              name: 'pauline',
              type: 'image',
              lazyImg: '../img/portfolio/grafico/lazy/pauline-l.jpg',
              thumbnail: '../img/portfolio/grafico/thumbnails/pauline-t.jpg',
              imgFull: '../img/portfolio/grafico/pauline.png',
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
          name: 'fotomontaje'
        },
        {
          name: 'vfx'
        },
        {
          name: 'motion'
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
    openWork(work){
      this.workSelected = work
      this.dialogImageOn = true
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/web/scss/portfolio';
</style>
