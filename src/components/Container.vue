<script>
export default {
  render: function(createElement) {
    const configs = {
      class: {
        "container--notFull": !this.fullScreen,
        "container--fullScreen": this.fullScreen
      }
    };
    return createElement(this.tag, configs, this.$slots.default);
  },
  props: {
    tag: {
      type: String,
      required: true
    },
    fullScreen: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style>
.container--fullScreen {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.container--notFull {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container--notFull {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container--notFull {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container--notFull {
    max-width: 910px;
  }
}

@media (min-width: 1200px) {
  .container--notFull {
    max-width: 1100px;
  }
}

@media (min-width: 1600px) {
  .container--notFull {
    max-width: 1400px;
  }
}
</style>