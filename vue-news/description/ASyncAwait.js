/* Async & Await
    - 매우 명료하게 비동기 처리가 가능한 최신 비동기 처리 패턴 문법.
    - Promise와 Callback에서 주는 단점들을 해결하고 자바스크립트의 비동기적 사고방식에서 벗어나 동기적(절차적)으로 코드를 작성있게 해준다.
 */

// ====================================== 가장 단순한 비동기 처리, 콜백 지옥 ====================================== //
var id = $.get('domain.com/id', function (id) {
    if (id === 'john') {
        $.get('domain.com/producs', function (products) {
            console.log(products); // JS의 콜백, 바로 products를 var로 받을 수 없고 이렇게 함수로 받아야 한다.
        });
    }
});

// ====================================== Promis를 이용한 비동기 처리 ====================================== //
function getId() {
    return new Promise(function (resolve, reject) {
        $.get('domian.com/id', function (id) {
        })
    })
}

getId()
    .then(function (id) {
        if (id === 'john') {
            $.get('domain.com/producs', function (products) {
                console.log(products); // JS의 콜백, 바로 products를 var로 받을 수 없고 이렇게 함수로 받아야 한다.
                return new Promise();
            });
        }
    })
    .then(function () { // chaining
    })
    .catch();


// ====================================== function을 밖으로 빼서 깔끔하게 만든 비동기 처리 ====================================== //
function getProduct() {
}

function logProduct() {
}

getId()
    .then(getProduct)
    .then(logProduct)
    .catch();

// ====================================== Async & Await 방식, 가장 단순 명료하다 ====================================== //

async function getchData() {
    var list = await getUserList();
    console.log(list);
}

function getUserList() {
    return new Promise(function (resolve, reject) {
        var userList = ['user1', 'user2'];
        resolve(userList);
    })
}

/* async, await의 try catch가 promis의 then catch보다 좋은 이유
    - 일반적인 자바스크립트 코드 에러까지 예외 처리가능하다.
    - then catch는 네트워크 요청, 비동기 요청의 에러만 캐치한다.

 */