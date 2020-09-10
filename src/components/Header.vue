<template>
  <Container tag="header" class="header" :class="[menuOpen ? 'header--opened' : 'header--close', {'header-open': headerOpen}]" fullScreen>
      <Container tag="div" class="header__content">
        <header class="header__logo-button">
          <g-link to="/" class="header__logo">
              <g-image alt="Agrodreams logo" src="~/assets/web/img/header/logo.svg" width="200" />
          </g-link>
          <Hamburger 
            @click.native="toggleMenu()" 
            :active="menuOpen" 
            class="header__hamburger" 
          />
        </header>
        <MainNav :active="mainNav" class="header__nav"></MainNav>
      </Container>
  </Container>
</template>
<script>
import MainNav from '~/components/MainNav.vue'
import Container from '~/components/Container.vue'
import Hamburger from '~/components/Hamburger.vue'
export default {
    components: {
      Container,
      MainNav,
      Hamburger
    },
    data(){
      return {
        menuOpen: false,
        mainNav: false,
        windowTop: 0,
        headerOpen: true
      }
    },
    beforeMount() {
      if (process.isClient) {
        window.addEventListener("scroll", this.onScroll)
      }
    },
    methods: {
      onScroll(e) {
        if (process.isClient) {
          if (window.top.scrollY < this.windowTop) {
            this.headerOpen = true
          } else if (window.top.scrollY >= 160) {
            this.headerOpen = false
          }
          this.windowTop = window.top.scrollY;
        }
      },
      toggleMenu() {
        this.menuOpen = !this.menuOpen
        if (!this.mainNav) {
          this.mainNav = true
        } else {
          setTimeout(() => {
            this.mainNav = false
          }, 500);
        }
      }
    },
    beforeDestroy() {
      if (process.isClient) {
        window.removeEventListener("scroll", this.onScroll)
      }
    }
}
</script>

<style lang="scss" scoped>
    .header {
      position: fixed;
      top: -70px;
      height: 50px;
      z-index: 4;
      background-color: rgba(35, 35, 35, .9);
      transition: height .0s, background-color .3s;
      transition: .2s ease-in;
      transition-delay: .3s;

      &.header-open {
        top: 0;
      }

      @media (min-width: 768px) {
        height: $headerHeight;
      }
    }

    .header__nav {
      @media(min-width: 768px) {
        display: flex;
        align-items: center;
      }
    }

    .header--close {
      @media (max-width: 767px){
        .header__nav{
          margin-top: 1.5em;
          animation: fadeOut;
          animation-duration: .25s;
          animation-delay: .25s;
          animation-fill-mode: forwards;
        }
      }
    }

    .header--opened {
      @media(max-width: 767px) {
        background-color: #232323;
        height: 100vh;

        .header__nav {
          display: flex;
          opacity: 0;
          margin-top: 1.5em;
          animation: fadeIn;
          animation-duration: .3s;
          animation-delay: .5s;
          animation-fill-mode: forwards;
        }
      }
    }

    .header__logo-button {
      position: relative;

      @media(max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: $headerHeight;
        width: 100%;
      }

      @media(max-width: 767px) {
        height: 50px;
      }

      @media (min-width: 768px) {
        height: 70px;
        display: flex;
        align-items: center;
        margin-right: 1em;
      }
    }

    .header__content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      height: 50px;
      padding: 0;

      .header__logo {
        max-width: 50%;
        display: flex;
        align-items: center;

        img {
          max-width: 100%;
          height: 40px;
          width: auto;
        }
      }

      @media (min-width: 768px) {
        height: $headerHeight;

        .header__logo {
          max-width: 100%;

          img {
            height: 50px;
            width: auto;
          }
        }
      }
    }

    .header__nav {
      width: 100%;

      @media (min-width: 768px) {
        width: auto;
      }
    }

    .header__footer {
      width: 100%;
      display: none;
      opacity: 0;

      .header__info {
        text-align: center;
      }
    }

    .header--opened {
      .header__footer {
        display: inline-block;
        opacity: 0;
        animation: fadeIn;
        animation-duration: .3s;
        animation-delay: .2s;
        animation-fill-mode: forwards;
      }
    }

    .header__hamburger {
      margin-right: auto;
      position: absolute;
      right: 0;
      top: 0px;

      @media (min-width: 768px) {
        top: 10px
      }

      @media(min-width: 768px) {
        display: none;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
</style>