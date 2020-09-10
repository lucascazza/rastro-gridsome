<template>
  <Container tag="section" class="content-footer">
    <div class="content-footer__content">
      <h2 class="web__subtitle">Conoce nuestros trabajos</h2>
      <g-link class="web__button" to="/portfolio">Portfolio</g-link>
    </div>
  </Container>
</template>
<script>
import Container from '~/components/Container'
export default {
  name: "FooterContent",
  components: {
      Container
  }
};
</script>
<style lang="scss">
.content-footer {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .web__subtitle {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      text-align: center;
    }

    .web__button {
      font-family: sprintSansMedium;
    }
  }


  @media (min-width: 768px) {
    margin-bottom: 15vh;
  }

  @media (min-width: 992px) {
    min-height: 60vh;
    margin-bottom: 20vh;

    &__content {
      .web__subtitle {
        font-size: 2.5rem;
      }
    }
  }

  @media (min-width: 1200px) {
    min-height: 80vh;
    margin-bottom: 30vh;
  }
}
</style>