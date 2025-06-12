import { useTodoContext } from "@/data/Context/TodoContext.tsx";
import TodoLi from "./TodoLi.tsx";

const TodoListData = () => {
  const { dataArr, setDataArr } = useTodoContext();

  const deleteItem = (index: number) => {
    setDataArr(dataArr.filter((_, i) => i !== index));
  };

  const toggleIsDone = (index: number) => {
    setDataArr((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };

  return (
    <ul
      className="md:mt-0 pt-1 overflow-x-auto relative z-10 flex flex-col gap-2
        md:px-0 md:pt-0"
    >
      {dataArr.map((item, index) => {
        return (
          <TodoLi
            value={item.value}
            date={item.date}
            setDeleteItem={deleteItem}
            index={index}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            isDone={item.isDone}
            toggleIsDone={toggleIsDone}
          />
        );
      })}
    </ul>
  );
};

export default TodoListData;
