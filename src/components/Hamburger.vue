<template>
  <span class="menu-btn" :class="{'active' : active}"></span>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  }
};
</script>
<style lang="scss">
.menu-btn {
  display: block;
  margin: 15px;
  margin-left: 0px;
  width: 32px;
  cursor: pointer;
}

.menu-btn:before,
.menu-btn:after {
  background-color: var(--green);
  content: "";
  display: block;
  height: 2px;
  transition: all 200ms ease-in-out;
}

.menu-btn:before {
  box-shadow: 0 9px 0 var(--green);
  margin-bottom: 16px;
}

.menu-btn.active:before {
  background-color: var(--green);
  box-shadow: 0 0 0 var(--green);
  transform: translateY(7px) rotate(45deg);
}

.menu-btn.active:after {
  background-color: var(--green);
  transform: translateY(-11px) rotate(-45deg);
}
</style>