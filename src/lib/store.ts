import { configureStore } from "@reduxjs/toolkit";
import { setUser } from './features/user/userSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: setUser
    }
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

