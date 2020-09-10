<template>
    <Container tag="footer" fullScreen class="main-footer">
        <g-image class="img-responsive main-footer__logo" src="~/assets/web/img/footer/footer.svg" alt="Footer logo" />
        <Container tag="div" class="main-footer__content">
                    
        </Container> 
    </Container>
</template>
<script>
import Container from "~/components/Container"
export default {
    components: {
        Container
    }
}
</script>
<style lang="scss" scoped>
  .main-footer {
    background: rgb(46, 57, 46);
    position: relative;
    padding: 0;
    
    &__logo{
      position: absolute;
      bottom: 49vh;
    }

    &__content{
      min-height: 50vh;
    }
  }
</style>