<template>
  <Container tag="section" class="content-footer">
    <div class="content-footer__content">
      <h2 class="web__subtitle">¿Perdiste algo? <br/> Tenemos lo que estas necesitando</h2>
      <g-link class="web__button" to="/portfolio">Experiencia Rastro</g-link>
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
  margin-bottom: 8vh;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .web__subtitle {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      text-align: center;
    }

    .web__button {
      font-family: sprintSansMedium;

      @media (max-width: 768px){
        max-width: 250px;
        font-size: 1rem;
      }
    }
  }


  @media (min-width: 768px) {
    margin-bottom: 10vh;
  }

  @media (min-width: 992px) {
    min-height: 60vh;
    margin-bottom: 15vh;

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