import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";
import getUsersReducer from "./slice/getUsers";
import statesReducer from "./slice/states";
import chatData from "./slice/chatData";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    users:getUsersReducer,
    states:statesReducer,
    chat:chatData
  },
});
