import TodoInput from "./TodoInput.tsx";
import TodoListData from "./TodoListData.tsx";

const TodoCom = () => {
  return (
    <div
      className="
        md:w-[min(100%,900px)] md:mx-auto px-3
        md:my-10"
    >
      <TodoInput />
      <TodoListData />
    </div>
  );
};

export default TodoCom;
