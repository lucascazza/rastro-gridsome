<template>
  <nav class="main-nav">
      <ul class="main-nav__list">
          <li v-for="(item, index) in menu" :key="index" class="main-nav__item" >
              <g-link class="main-nav__link" :to="item.path">{{item.name}}</g-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  data () {
    return {
      menu: [
          {
            name: 'Nosotros',
            path: '/nosotros'
          },
          {
            name: 'Portfolio',
            path: '/portfolio'
          }
      ]
    }
  }
}
</script>

<style lang="scss">
.main-nav__list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid var(--green);
  border-bottom: 1px solid var(--green);
  @media(min-width: 768px){
    border: none;
    flex-direction: row;
  }
}
.main-nav__item{
  margin-top: 2em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  &:last-child{
    margin-bottom: 2em;
  }
  @media(min-width: 768px){
    width: auto;
    margin: 0 1em;
    &:last-child{
      margin-bottom: 0em;
      margin-right: 0;
    }
  }

   @media(min-width: 1200px){
    width: auto;
    margin: 0 1.2em;
    &:last-child{
      margin-bottom: 0em;
      margin-right: 0;
    }
  }
}
@keyframes lineTransition{
  from{
    transform: scaleX(0)
  }
  to{
    transform: scaleX(1)
  }
}
.main-nav__link:after{
  display:block;
  content: '';
  border-bottom: solid 2px var(--yellow);  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
  transition-delay: 1s;
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
}
.main-nav__link.active:after{
  animation: lineTransition .3s forwards;
  animation-delay: .1s;
}
.main-nav__link{
  color:  #ffffff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  display: flex;
  &:hover:after{
    animation: lineTransition .3s forwards;
  }
  @media (min-width: 1200px){
    font-size: 1.125rem;
  }
}
.main-nav__button{
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding: 1em;
  border: 2px solid var(--purple);
  color: var(--purple);
  border-radius: 22px;
  transition: all .3s;
  max-width: 400px;
  @media(min-width: 768px){
    display: inline-block;
    padding: .5em 2em;
  }
  &:hover{
    background-color: var(--purple);
    color: white;
  }

  &.invert{
    background-color: var(--purple);
    color: white;

    &:hover{
    background-color: transparent;
    color: var(--purple);
  }
  }
}
</style>