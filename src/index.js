import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { addTodo } from "./redux/actions";

// store에 변경이 일어나는 것을 구독한다
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log(store);
console.log(store.getState());

// store에 값을 전달
store.dispatch(addTodo("coding"));
store.dispatch(addTodo("read book"));
store.dispatch(addTodo("eat"));

// store 변경 구독을 중지한다
unsubscribe();

store.dispatch(addTodo("study"));
store.dispatch(addTodo("rest"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
