<template>
    <div>
        <canvas height="400" id="barChart" ref="barChart" width="400"/>
    </div>
</template>

<script>

    export default {
        name: "BarChart",
        props: ['propsdata'],
        mounted() {
            // var ctx = document.getElementById('barChart'); // 이런 쿼리접근자는 컴포넌트가 다 만들어졌을 때 가능하므로 mounted에 넣음
            // refs가 vue의 querySelector같은 것
            new this.$_Chart(this.$refs.barChart, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: this.propsdata
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        },

    }
</script>

<style scoped>

</style>