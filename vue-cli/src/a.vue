<!--    var appHeader = {                           -->
<!--         template: '<div>header</div>',          -->
<!--         methods: {                              -->
<!--             addNum:...                          -->
<!--            }                               -->

<!--      }                                     -->
<!-- 이런 코드들을 아래의 각 위치에 맞게 넣으면 된다.  -->

<template>
    <!--   HTML     -->
    <div>header</div>
</template>

<script>
    export default {
        // Javascript
        /* .vue란?
        - html, css, js의 위치를 각 분리해서 개발가능
        */
        methods: {
            addNum: function () {

            },
        }
    }
</script>

<style>
    /* CSS */
</style>