import { ADD_TODO } from "./actions";

const initialState = [];

export function todoApp(previousState = initialState, action) {
  // 초기값 설정 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }

  return previousState;
}
