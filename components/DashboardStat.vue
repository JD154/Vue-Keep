<template>
  <div class="stat-card">
    <div class="card-content">
      <h6>{{stat.data}}</h6>
      <p class="tiny-text">{{stat.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardStat',
  props: {
    stat: {
      type: Object,
    }
  }

}
</script>

<style lang="scss" scoped>
  .stat-card {
    height: 115px;
    padding: $main-padding;
    background-color: white;
    border: 2px solid $border-dark;
    border-radius: $border-radius;
    
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h6 {
      margin: 0;
    }

    .tiny-text{
      text-align: center;
    }
  }
</style>