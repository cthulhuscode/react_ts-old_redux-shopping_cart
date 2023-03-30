import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer, productsReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const combinedReducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
