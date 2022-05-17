import { configureStore } from "@reduxjs/toolkit";

// Reducer criado da mesma forma
function reducer(state = 0, action: { type: string }) {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    case "DECREMENTAR":
      return state - 1;
    default:
      return state;
  }
}
export default configureStore({
  reducer: reducer,
  devTools: true
});
