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

</style>

