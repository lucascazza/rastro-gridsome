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
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content{
    display: flex;
    flex-direction: column;
    align-items: center;

    .web__subtitle{
      margin-bottom: 1rem;
      font-size: 2.5rem;
      text-transform: uppercase;
    }

    .web__button{
      font-family: sprintSansMedium;
    }
  }
}
</style>