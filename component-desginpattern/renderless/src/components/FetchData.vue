<script>
    //여기에서 데이터를 받아오고 특정 데이터만 App에만 올린다.
    import axios from 'axios'

    export default {
        props: ['url'],
        data() {
            return {
                response: null,
                loading: true,
            }
        },
        created() {
            axios.get(this.url)
                .then(response => {
                    this.response = response.data;
                    this.loading = false;
                });
        },
        render() {
            // 이렇게 값을 보낼 수 있다.
            return this.$scopedSlots.default({
                response: this.response,
                loading: this.loading,
            });
        },
    }
</script>
