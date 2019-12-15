<template>
    <div>
        <app-header
                v-bind:propsdata="str"
                v-on:renew="renewStr"
        />
    </div>
    <!--    <div></div>     -->
    <!--    div는 한개만 존재해야한다!!     -->
</template>

<script>
    // 외부 .vue를 가져올땐 이렇게 import한다.
    import AppHeader from "./components/AppHeader";

    // new Vue({
    //     data: {
    //         str: 'hi'
    //     }
    // });
    export default {
        // 다른 vue에서 참조하면 안되기 때문에 function으로 만들고 retrun안에 넣어줘야 한다.
        data: function () {
            return {
                str: 'Header'
            }
        },
        components: {
            'app-header': AppHeader,
        },
        methods: {
            renewStr: function () {
                this.str = 'Renewd Header';
            }
        }
    }
</script>

<style>

</style>