<template>
    <div id="app">
        <app-header :title="appTitle"/>
        <app-content :items="items" @renew='renewItems'/>
    </div>
</template>

<script>
    import AppHeader from "./components/AppHeader";
    import AppContent from "./components/AppContent";
    /* common 패턴
       - 가장 기본적인 컴포넌트 설계 방식
       - 하위 컴포넌트(엔드포인트 컴포넌트)들은 presentational 컴포넌트이며 모든 데이터는 App.vue에서 관리
     */
    export default {
        name: 'app',
        components: {
            AppHeader,
            AppContent,
        },
        data() {
            return {
                appTitle: 'Common Approach',
                items: [10, 20, 30],
            }
        },
        methods: {
            renewItems() {
                this.items = [40, 50, 60];
            },
        }
    }
</script>
<style>
</style>
