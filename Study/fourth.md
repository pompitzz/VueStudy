### ES5와 ES6
#### ES5
 - 선언한 함수와 변수를 해석기가 가장 상단에 있는 것처럼 인식
 - js 해석기는 코드의 라인 순서와 관계없이 함수 선언식과 변수를 위한 메모리 공간을 먼저 확보
 - 따라서 function (), var 코드는 최상단에 끌어 올려진 것 처럼보이기 때문에 변수를 뒤늦게 작성해도 괜찮은 것
```js
// 함수 선언 식
function sum(a, b) {
 return a + b;
};

// 함수 표현 식
var sum = function() {
return 10 + 20;
}
```
```js
// 이렇게 코딩하고 실행을 해보면
function a() {
  return 10;
}

a();

function a(){
 return 5;
}

// 실제론 이렇게 컴파일 되기 때문에 5가 리턴된다.
function a() {
  return 10;
}
function a(){
  return 5;
}

a();
```
``` js
// 이렇게 선언하더라도 에러가 나지 않음
var sum = 5;
sum = sum + i;
var i = 10;

// 실제론 이렇게 컴파일 되기 때문에 값이 이상하겠지만 정상적으로 동작한다.
var sum;
var i;
sum = 5;
sum = sum + i;
i = 10;
```
#### ES6
- 블록단위 { }로 변수의 범위가 제한된다.
- const: 한번 선언한 값에 대해 변경 불가 ( final )
- let: 한번 선언한 값에 대해서 다시 선언할 수 없음. (int a후 다시 int a 불가)
```js
//let 예제
let sum 0;
for (let i = 1  i < 5; i++){
  sum = sum + i;
}
console.log(sum); // 10;
console.log(i); // 에러 발생, { }이 변수의 범위이므로
```
```js
//const 예제
const a = 20;
a = 10; // 에러 발생

// 하지만 객체나 배열의 내부는 변경 가능하다
const a = {};
a.num = 10;
a; // {num: 10};
const b =  [];
b.push(10);
b; // [10]
```
#### Arrow Function - ES6 화살표 함수
- 함수를 정의할 때 function 이라는 키워드를 사용하지 않고 => 로 대체
- 흔히 사용하는 콜백 함수의 문법을 간결과
```js
// ES5 함수 정의 방식
var sum = function(a, b){
 return a + b;
}

// ES6 함수 정의 방식
var sum = (a, b) => {
 return a + b;
}
```
```js
// ES5
var arr = ['a', 'b', 'c'];
arr.forEach(function(value){
 console.log(value);
});

// ES6: 웹페이지의 바이트수가 줄어드니 조금의 성능 이윤은 있으나 그거보단 간결해진게 좋다
var arr = ['a', 'b', 'c'];
arr.forEach(value => console.log(value));
```
#### Enhanced Object Literals - 향상된 객체 리터럴
- 객체의 속성을 메서드로 사용할 때 function 예약어를 생략하고 생성 가능
```js
// ES5
var dic = {
 lookup: function() {
   console.log('hi lookup');
 }
};
dic.lookup();

// ES6의 향상된 객체 리터럴
var dic = {
 lookup(){ // function이 필요없어짐
   console.log('hi lookup');
 }
};
dic.lookup();
```
```js
var figures = 10;
var dic = {
 // figures: figures, -> 객체의 속성과 값의 name이 같을땐 생략 가능
 figures
}
```
