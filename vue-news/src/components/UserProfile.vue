<template>
    <div>
        <div class="user-container">
            <div>
                <i class="fas fa-user"/>
            </div>
            <div class="user-description">
                <div>
                    {{getUser.id}}
                </div>
                <small class="created">
                    {{getUser.created}}
                </small>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "UserProfile",
        computed: {
            ...mapGetters(['getUser'])
        },
        created() {
            const username = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', username);
        }
    }
</script>

<style scoped>
    .user-container {
        display: flex;
        align-items: center;
        padding: 7px;
    }

    .fa-user {
        font-size: 2.5rem;
    }

    .user-description {
        padding-left: 8px;
    }

    .created {
        font-size: 0.8rem;
        color: #828282;
    }

</style>