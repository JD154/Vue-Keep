<template>
  <div class="app">
    <div class="container">
      <div class="section-wrapper">
        <h6 class="section-title">Dashboard</h6>
      </div>
      <div class="flex-header">
        <div>
          <h6 class="section-title">My report</h6>
          <p class="section-subtitle">Weekly stadistics</p>
        </div>
      </div>
      <div class="stat-grid">
        <DashboardStat v-for="(stat, index) in getWeeklyStats" :key="index" :stat="stat"/>
      </div>
      <div class="flex-header">
        <div>
          <h6 class="section-title">My performance</h6>
          <p class="section-subtitle">Weekly chart</p>
        </div>
      </div>
      <DashboardChart />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DashboardStat from '../components/DashboardStat';
import DashboardChart from '../components/DashboardChart';


export default {
  components: {
    DashboardStat,
    DashboardChart
  },
  data() {
    return {
      
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters('dashboard', [
      'getWeeklyStats',
    ])
  },
}
</script>

<style lang="scss" scoped>
  .stat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $grid-gap;
  }
</style>