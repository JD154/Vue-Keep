<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Tasks completed',
          backgroundColor: '#f87979',
          data: [4, 7, 3, 8, 9, 4, 2, 6],
          backgroundColor: '#f1f5f8',
          pointBackgroundColor: '#2caeba',
          borderColor: '#617d98',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
          },
        }],
        xAxes: [{
          gridLines: {
            display: false,
          },
        }],
      },
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style lang="scss" scoped>

  #line-chart{
    max-height: 250px;
    background-color: white;
    border: 2px solid $border-dark;
    border-radius: $border-radius;
  }
</style>