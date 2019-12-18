/* Mixins
        - 믹스인은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법입니다/ 믹스인에 정의할수 있는
          재사용 로직은 data, methods, created 등과 같은 컴포넌트 옵션입니다.

        - 하이 오더 컴포넌트의 단점
           - 하이 오더 컴포넌트는 ListView라는 중간 View가 존재한다. 허나 믹스인은 존재하지 않는다.
             대신 각 News,Job, Ask View 파일이 필요
           - NewsView 이하의 ListView가 통신이 필요하면 컴포넌트의 깊이가 길어진다.
           - 이럴때 Mixin이 유용할 수 있다.
     */
import bus from "../utils/bus";

export default {
    // 재사용할 컴포넌트 옵션 & 로작
    created() {
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner');
            })
            .catch((error) => {
                console.log(error);
            });
    }

}
