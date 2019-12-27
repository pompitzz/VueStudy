### 비동기 처리
- 데이터 요청이 가고 응답이 오기 전에 다른게 먼저 실행 될 수 있음

#### 1. 가장 단순한 비동기 처리(콜백 함수)
- 아래 코드를 보면 비동기 처리를 위해선 fuction(){} 안에 로직을 작성해야 한다.
- 비동기 처리가 많이 일어나면 상당히 복잡해지며 콜백 지옥이 된다.
```js
var id = $.get('domain.com/id', function (id) {
    // 비동기 처리를 위해선 이 안에 로직 작성..
    if (id === 'john') {
        $.get('domain.com/producs', function (products) {
            // 비동기 처리를 위해선 이 안에 로직 작성..
            console.log(products);
        });
    }
});

```

#### 2. Promise를 이용한 비동기 처리
- 위의 콜백 함수의 대안으로 Promise가 생겼다
- then, catch를 이용하여 비동기 처리가 가능하다.
- then은 비동기 처리가 성공하였을 때
- catch는 비동기 처리가 실패하였을 때
- 직관적인 코드를 짜게 해줌
- 단점
  - 일반적인 프로그래밍 사고방식과 조금 다르다.
  - catch에서는 네트워크 요청에 관한 에러만 잡아주며 JS 에러를 잡아주지 않는다.
```js
// 이렇게 Promise를 이용하여 get요청을 보낸다.
function getId() {
    return new Promise(function (resolve, reject) {
        $.get('domian.com/id', function (id) {
        })
    })
}

// 그 요청을 then, catch를 통해 로직을 처리한다.
getId()
.then(function (id) {
    if (id === 'john') {
        $.get('domain.com/producs', function (products) {
            console.log(products);
            return new Promise();
        });
    }
})
.then(function () { // chaining도 가능하다.
})
.catch();

// ====================================================
// 함수를 이용하면 깔끔하게 비동기 처리를 할 수 있다.
function getProduct() {
}

function logProduct() {
}

getId()
    .then(getProduct)
    .then(logProduct)
    .catch();
```

#### 3. Async & Await 방식
- 매우 명료하게 비동기 처리가 가능한 최신 비동기 처리 패턴 문법.
- 일반적인 프로그래밍 사고방식으로 비동기 처리를할 수 있다.
- Promise기반으로 동작된다.
- try, catch를 통해 비동기를 처리한다.
- 여기서 try, catch는 Promise의 then, catch와 다르게 JS 에러들도 잡아준다.

```js
// Promise로 비동기 처리를하고 결과값을 resolve에 담아준다.
function getUserList() {
  return new Promise(fuction(resolve, reject){
    var userList = ['user1', 'user2'];
    resolve(userList);
  })
}

// 로직을 작성하는 함수에 async를 붙여주고
// 비동기 처리로 받을 함수를 호출할 때 await을 사용하면된다.
// catch를 통해 에러 처리를 할 수 있다.
async function getData() {
  try{
    var list = await getUserList();
    console.log(list);
  }
  catch(e){
    console.log(e);
  }
}
```
