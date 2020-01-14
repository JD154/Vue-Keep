<template>
  <div class="nav-wrapper">
    <nuxt-link class="route micro-text" to="dashboard">
      <i class="material-icons">dashboard</i>
      Dashboard
    </nuxt-link>
    <nuxt-link class="route micro-text" to="/">
      <i class="material-icons">assignment</i>
      Todos
    </nuxt-link>
    <nuxt-link class="route micro-text" to="settings">
      <i class="material-icons">settings_applications</i>
      Settings
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
    }
  },
}
</script>

<style lang='scss'>

  page-enter-active, .page-leave-active {
    transition: all .30s ease-out;
  }

  .page-enter, .page-leave-active {
    transform-origin: 50% 50%;
  }
  
  .nav-wrapper {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    background-color: white;
    height: 66px;
    width: 100%;
    padding: 0 $main-padding;
    border-top: 2px solid $border-dark;
  }

  .route {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: hsl(211, 27%, 70%) !important;
    height: 100%;
    min-width: 60px;
    border-radius: $border-radius;
    padding: 0 5px;

    &:hover, &:focus {
      color: $text-dark;
    }

    i {
      margin-bottom: 2px;
    }
  }

  .nuxt-link-exact-active {
    color: $text-dark !important;
    text-decoration: none;
    border: none;
  }
</style>