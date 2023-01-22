import Swal from "sweetalert2";
import { editTodo } from "../../redux/state/todo/todoSlice";
import store from "../../redux/store/store";

export function TodoEditAlert(i, item) {
  Swal.fire({
    title: "Update Task Name",
    input: "text",
    inputValue: item,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(editTodo({ index: i, task: value }));
      }
    },
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Edit",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Success!", "Your task name has been edited.", "success");
    }
  });
}
