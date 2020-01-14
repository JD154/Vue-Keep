<template>
  <div>
    <nuxt/>
    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar';

export default {
  components: {
    NavigationBar,    
  },
}
</script>
<style lang='scss'>

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: $bg-light;
  }

  .app {
    min-height: 100vh;
    padding-bottom: 56px;
    position: relative;
  }

  .container {
    height: 100%;
    padding: $main-padding;
  }

  .flex-header {
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .section-subtitle {
    span {
      color: $primary-default;
      font-weight: 400;
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }

  .btn {
    padding: 5px 15px;
    margin: 15px auto;
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);

    &:hover, &:focus {
      transform: $main-scale;
      outline: none;
      border: none;
    }
  }
</style>

