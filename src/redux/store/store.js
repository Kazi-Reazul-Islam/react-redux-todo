import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./../state/todo/todoSlice";

export default configureStore({
  reducer: {
    todo: todoSlice,
  },
});
