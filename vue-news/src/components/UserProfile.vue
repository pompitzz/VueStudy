<template>
    <div>
        <div class="user-container">
            <div>
                <i class="fas fa-user"/>
            </div>
            <div class="user-description">
                <!-- 상위 컴포넌트에서 정의할 영역 -->
                <slot name="username"/>
                <div class="time">
                    <slot name="time"/>
                    <span class="karma">
                         <slot name="karma"/>
                    </span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "UserProfile",
        props: {
            info: Object,
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

    .time {
        font-size: 0.8rem;
        color: #828282;
    }

    .karma {
        color: black;
    }

</style>