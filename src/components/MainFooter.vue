<template>
    <Container tag="footer" fullScreen class="main-footer">
        <Container tag="div" class="content">
                    
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
    min-height: 50vh;
    background: rgb(46, 57, 46);
    position: relative;

    &:before {
      content: '';
      background-image: url(../assets/web/img/footer/footer.svg);
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      display: flex;
      height: 220px;
      right: 0;
      left: 0;
      top: -150px
    }
  }
</style>