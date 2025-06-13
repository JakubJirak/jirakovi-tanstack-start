import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

interface TodoItem {
  value: string;
  date: string;
  index: number;
  setDeleteItem: (index: number) => void;
  isDone: boolean;
  toggleIsDone: (index: number) => void;
}

const TodoLi = ({
  value,
  date,
  index,
  setDeleteItem,
  isDone,
  toggleIsDone,
}: TodoItem) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <li
      className={` ${isDone ? "bg-primary-900/40" : ""} grid [grid-template-rows:1fr_auto] gap-2 items-center bg-primary-800/40 p-2 rounded-xl relative z-10 transition duration-200
        md:[grid-template-columns:auto_1fr_auto] md:grid-rows-1 md:gap-3`}
    >
      <button
        type="button"
        className={` ${isDone ? "bg-secondary-800 border-secondary-800" : ""} absolute right-3.5 top-2 w-9 h-9 border-secondary-700 border-2 rounded-full ml-2 flex items-center justify-center
                md:relative md:top-[unset] md:right-[unset]`}
        onClick={() => {
          toggleIsDone(index);
        }}
      >
        {isDone ? <IoMdCheckmark className="text-3xl font-bold" /> : ""}
      </button>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={` ${isDone ? "text-gray-500 line-through" : ""} w-[83%] transition duration-200 ml-2 text-xl mt-1
            md:mt-0 md:w-full`}
        onClick={() => {
          toggleIsDone(index);
        }}
      >
        {value}
      </div>
      <div className="flex items-center justify-between pl-2">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <p
          className={` ${isDone ? "text-gray-500 line-through" : ""} transition duration-200 mb-[-20px] text-gray-400 w-full
                md:mb-0`}
          onClick={() => {
            toggleIsDone(index);
          }}
        >
          {formattedDate}
        </p>
        <button
          type="button"
          className="bg-red-500/30 rounded-full text-2xl ml-8 mr-1 p-2 mt-2 hover:bg-red-600 cursor-pointer transition duration-200
                    md:mt-0"
          onClick={() => setDeleteItem(index)}
        >
          <FaRegTrashCan />
        </button>
      </div>
    </li>
  );
};

export default TodoLi;
