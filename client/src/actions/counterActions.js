import { INCREMENT, DECREMENT, RESET } from "../types/counterTypes";

export function increment() {
  return function(dispatch) {
    dispatch({ type: INCREMENT });
  };
}

export function decrement() {
  return function(dispatch) {
    dispatch({ type: DECREMENT });
  };
}

export function reset() {
  return function(dispatch) {
    dispatch({ type: RESET });
  };
}
