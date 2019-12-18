<template>
    <canvas id="lineChart" ref="lineChart"/>
</template>

<script>
    export default {
        name: "LineChart",
        mounted() {
            new this.$_Chart(this.$refs.lineChart.getContext('2d'), {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [5, 10, 5, 2, 20, 30, 35]
                    }]
                },

                // Configuration options go here
                options: {}
            });
        }
    }
</script>

<style scoped>

</style>