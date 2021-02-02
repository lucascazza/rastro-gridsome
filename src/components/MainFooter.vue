<template>
    <Container tag="footer" fullScreen class="main-footer">
        <g-image class="img-responsive main-footer__logo" src="~/assets/web/img/footer/footer-background-verde.svg" alt="Footer logo" />
        <Container tag="div" class="main-footer__content">
          <p>Copyright © 2021 Rastro</p>
          <div class="main-footer__content--redes">
            <a href="">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50"
                    style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <g>
                      <g>
                        <path class="st0" d="M40.26,35.54V18.58l-13.94-7.2V4.98h-2.63v6.39l-13.94,7.2v16.97L2.86,39.1l1.21,2.33l6.99-3.61L25,45.02
			l13.94-7.2l6.99,3.61l1.21-2.33L40.26,35.54z M23.69,41.39l-11.32-5.85V21.53l11.32,5.85V41.39z M25,25.1l-11.08-5.73L25,13.65
			l11.08,5.73L25,25.1z M37.63,35.54l-11.32,5.85V27.38l11.32-5.85V35.54z" />
                      </g>
                    </g>
                  </svg>
            </a>
            <a href="">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50"
                    style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <g>
                      <g>
                        <path class="st0" d="M40.26,35.54V18.58l-13.94-7.2V4.98h-2.63v6.39l-13.94,7.2v16.97L2.86,39.1l1.21,2.33l6.99-3.61L25,45.02
			l13.94-7.2l6.99,3.61l1.21-2.33L40.26,35.54z M23.69,41.39l-11.32-5.85V21.53l11.32,5.85V41.39z M25,25.1l-11.08-5.73L25,13.65
			l11.08,5.73L25,25.1z M37.63,35.54l-11.32,5.85V27.38l11.32-5.85V35.54z" />
                      </g>
                    </g>
                  </svg>
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
    }
}
</script>
<style lang="scss" scoped>
  .main-footer {
    background: #314430;
    position: relative;
    padding: 0;
    
    &__logo{
      position: absolute;
      bottom: 24vh;
    }

    &__content{
      padding: 0 1rem;
      min-height: 25vh;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p{
        font-size: 1rem;
      }

      &--redes{
        display: flex;
        align-items: center;
        a{
          width: 45px;
          margin-right: 1rem;

          &:last-child{
            margin: 0;
          }
          
          svg{
            fill: #fff;
          }
        }
      }
    }
  }
</style>