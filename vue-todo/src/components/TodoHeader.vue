<template>
    <header>
        <!--        <h1>TO.DO it!</h1>-->
        <h1>{{ headerText }}</h1>
    </header>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                headerText: 'getHeaderText'
            }),
        }
    }
</script>
<!-- scoped란 해당 컴포넌트 안에서만 유요한 스타일 속성이란 뜻이다. -->
<style scoped>
    h1 {
        color: #2F3B52;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
    }
</style>