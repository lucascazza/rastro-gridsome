<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right btn btn-light">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" viewBox="0 0 18 11" style="enable-background:new 0 0 18 11;" xml:space="preserve">
      <path class="yellow" d="M2.1,10.29c-0.42,0-0.83-0.17-1.13-0.51C0.43,9.16,0.49,8.21,1.11,7.67L9,0.71l7.89,6.96
	c0.62,0.55,0.68,1.5,0.13,2.12c-0.55,0.62-1.49,0.68-2.12,0.13L9,4.71L3.09,9.92C2.81,10.17,2.45,10.29,2.1,10.29z" />
    </svg>
  </a>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    scrollTop(){
      if (process.isClient) {
        window.scrollTo(0, 0);
      }
    },
    scrollListener(e) {
      if (process.isClient) {
        this.visible = window.scrollY > 160
      }
    }
  },
  beforeMount(){
    if (process.isClient) {
      window.addEventListener('scroll', this.scrollListener)
    }
  },
  beforeDestroy() {
    if (process.isClient) {
      window.removeEventListener('scroll', this.scrollListener)
    }
  }
}
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 9;
  opacity: 0;
  animation: slideInUp .4s forwards;
  animation-delay: .1s;
}
.btn {
    border-radius: 50px;
    background-color: rgba(16, 254, 204, .3);
    padding: 10px;
    width: 40px;
    height: 40px;
}
.yellow{
  fill: var(--cyan);
}
</style>
