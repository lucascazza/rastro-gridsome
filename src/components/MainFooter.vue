<template>
    <Container tag="footer" fullScreen class="main-footer">
        <g-image class="img-responsive main-footer__logo" src="~/assets/web/img/footer/footer-background.svg" alt="Footer logo" />
        <Container tag="div" class="main-footer__content">
          <p>Copyright © 2021 Rastro</p>
          <g-image class="img-responsive" src="~/assets/web/img/logo-bn.svg" alt="Logo" />                
          <div class="main-footer__content--redes">
            <a href="https://www.instagram.com/somos.rastro/" target="_blank">
              <i class="icon-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC67FEpvP-BuiisN_OtAvmDg" target="_blank">
              <i class="icon-youtube"></i>
            </a>
            <a href="https://vimeo.com/user133450978" target="_blank">
              <i class="icon-vimeo"></i>
            </a>
            <a href="https://www.behance.net/somosrastro" target="_blank">
              <i class="icon-behance"></i>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rastro.multimedial@gmail.com" target="_blank">
              <i class="icon-email"></i>
            </a>
          </div>
        </Container> 
    </Container>
</template>
<script>
import Container from "~/components/Container"
export default {
  components: {
    Container
  },
  beforeMount() {
    if (process.isClient) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  beforeDestroy() {
    if (process.isClient) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 992
    }
  },
  data() {
    return {
      windowWidth: 0
    }
  },
  methods: {
    handleResize() {
      if (process.isClient) {
        this.windowWidth = window.innerWidth;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .main-footer {
    background: #f6f6f6;
    position: relative;
    padding: 0;

    &__logo {
      position: absolute;
      bottom: 24vh;
    }

    &__content {
      padding: 1.5rem 1rem .5rem 1rem;
      min-height: 25vh;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-around;
      align-items: center;

      @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
      }

      p {
        font-size: 1rem;
        color: #232323;
      }

      .img-responsive{
        max-width: 80px;
        padding: .5rem;

        @media (min-width: 768px){
          max-width: 100px;
        }

        @media (min-width: 992px){
          max-width: 110px;
        }

        @media (min-width: 1200px){
          max-width: 120px;
        }
      }

      &--redes {
        display: flex;
        align-items: center;

        a {
          text-decoration: none;
          margin-right: 1rem;

          &:last-child {
            margin: 0;
          }

          i {
            color: #232323;
            font-size: 36px;

            @media (min-width: 768px){
              font-size: 40px;
            }
          }
        }
      }
    }
  }
</style>