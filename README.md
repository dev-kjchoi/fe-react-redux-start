# Redux Start

Redux의 기본적인 기능 학습을 위한 Sample Project

### Redux 설치

```
npm i redux
```

### Redux 기본 파일 생성

- redux/actions.js
- redux/reducers.js
- redux/store.js

### Redux Store 사용

```javascript
// index.js
import store from "./redux/store";
import { addTodo } from "./redux/actions";

// store 내용 확인
console.log(store);

// store의 변경 구독 - subscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store에 값을 전달 - dispatch
store.dispatch(addTodo("coding"));

// store의 변경 구독 중지 - unsubscribe
unsubscribe();
```
