<template>
    <!--  이렇게 button이 아닌 form에서 받아서 쓰는게 좋다  -->
    <form action="" v-on:submit.prevent="submitForm">
        <div>
            <label for="username">id: </label>
            <!--  v-model로 값을 연결할 수 있다.   -->
            <input id="username" type="password" v-model="username">
        </div>
        <div>
            <label for="password">pw: </label>
            <input id="password" type="text" v-model="password">
        </div>
        <!-- type=submit이면 input에서 enter로 전송가능  -->
        <button type="submit">login</button>
    </form>
</template>

<script>
    import axios from 'axios';

    export default {
        // 컴포넌트 단위로 개발할땐 컴포넌트 간 데이터가 공유되지 않게 function을 연결하여 새 객체를 리턴해주자
        data: function () {
            return {
                // null로 해도되지만 string type이므로 ''
                username: '',
                password: '',
            }
        },
        methods: {
            submitForm: function (event) {
                // v-on에서 바로 설정가능
                // event.preventDefault();
                console.log(this.username, this.password);
                var url = 'https://jsonplaceholder.typicode.com/users';
                var data = {
                    username: this.username,
                    password: this.password,
                };
                axios.post(url, data)
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }
        }
    }
</script>

<style>

</style>