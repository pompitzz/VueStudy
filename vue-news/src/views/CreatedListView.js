import ListView from "./ListView";

/* 하이 오더 컴포넌트
        - 뷰의 하이오더 컴포넌트는 리액트의 하이 오더 컴포넌트에서 기원 된 것이다. 리액트의 하이 오더 컴포넌트 소개 페이지를
          보면 아래와 같이 정확한 정의가 나와 있다.
        - 하이오더 컴포넌트는 컴포넌트의 로직을 제사용하기 위한 고급 기술이다.
        - A higher-order component (HOC) is an advanced technique in React for reusing component logic.
        - News, Ask, Jobs의 created에서 사용한 스피너 로직을 하이 오더를 통해 한개로 몰았다.
        - 이로인해 각 데이터를 받아오는 로직도 list하나로만 구현하면 된다.
     */
export default function createdListView(name) {
    return { // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name,
        // created() {
        //     bus.$emit('start:spinner');
        //     this.$store.dispatch('FETCH_LIST', this.$route.name)
        //         .then(() => {
        //             console.log('fetched');
        //             bus.$emit('end:spinner');
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // },
        render(createElement) { //  render함수로 컴포넌트를 로딩한다.
            return createElement(ListView);
        },

    }
}