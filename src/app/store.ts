import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../reducers/inventoryReducer';
import workerReducer from '../reducers/workerReducer';

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    worker: workerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
