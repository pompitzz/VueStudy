import * as mutations from './../mutations'
import * as getters from './../getter'

/* state로 직접 변경하지 않고 mutations로 변경할까?
   - 여러 개의 컴포넌트에서 state값을 변경할 경우 어느 컴포넌트에서 해당 state를 변경했는지 추적하기가 어렵다.
 */
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};
const state = {
    headerText: 'TODO IT!',
    todoItems: storage.fetch(),
};
const getters = getters;

const mutations = mutations;

// default는 한개만 추출될수 있다
export default {
    state,
    getters,
    mutations
}