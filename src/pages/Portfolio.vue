<template>
  <Layout>
    <Container tag="div" fullScreen class="portfolio-header">
      <Container tag="div" class="portfolio-header__options">
        <v-tabs color="#ebff29" background-color="#232323" show-arrows class="color-arrows">
          <v-tab v-for="tab in tabs" :key="tab.name">{{tab.label}}</v-tab>

          <v-tab-item v-for="n in 3" :key="n" background-color="#232323">
            <v-container fluid>
              <v-row>
                <v-col v-for="i in 6" :key="i" cols="12" md="4">
                  <v-img :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`" aspect-ratio="1"></v-img>
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
  },
  data() {
    return {
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
      ]
    };
  },
}
</script>

<style lang="scss">
  @import '~/assets/web/scss/portfolio';
</style>
