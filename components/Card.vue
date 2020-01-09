<template>
  <div class="card">
    {{todo}}
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    todo: Array,
  }
}
</script>

<style lang="scss" scoped>
  .card{
    min-height: 150px;
    min-width: 150px;
    background-color: white;
    border: 1px solid $border-dark;
    border-radius: $border-radius;
    transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
    padding: 15px;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 1px 0 0 $border-dark;
  }
</style>