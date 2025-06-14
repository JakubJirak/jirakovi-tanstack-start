import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

interface LoggedTodoProps {
  text: string;
  date: string;
  isDone: boolean;
  id: number;
  handleDelete: (id: number) => void;
  handleUpdate: (id: number, isDone: boolean) => void;
}

const LoggedTodo = ({
  text,
  date,
  isDone,
  id,
  handleDelete,
  handleUpdate,
}: LoggedTodoProps) => {
  return (
    <li
      className={` ${isDone ? "bg-primary-900/40" : ""} grid [grid-template-rows:1fr_auto] gap-2 items-center bg-primary-800/40 p-2 rounded-xl relative z-10 transition duration-200
        md:[grid-template-columns:auto_1fr_auto] md:grid-rows-1 md:gap-3`}
    >
      <button
        type="button"
        onClick={() => handleUpdate(id, isDone)}
        className={` ${isDone ? "bg-secondary-800 border-secondary-800" : ""} absolute right-3.5 top-2 w-9 h-9 border-secondary-700 border-2 rounded-full ml-2 flex items-center justify-center
                md:relative md:top-[unset] md:right-[unset]`}
      >
        {isDone ? <IoMdCheckmark className="text-3xl font-bold" /> : ""}
      </button>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={() => handleUpdate(id, isDone)}
        className={` ${isDone ? "text-gray-500 line-through" : ""} w-[83%] transition duration-200 ml-2 text-xl mt-1
            md:mt-0 md:w-full`}
      >
        {text}
      </div>
      <div className="flex items-center justify-between pl-2">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <p
          onClick={() => handleUpdate(id, isDone)}
          className={` ${isDone ? "text-gray-500 line-through" : ""} transition duration-200 mb-[-20px] text-gray-400 w-full
                md:mb-0`}
        >
          {date}
        </p>
        <button
          type="button"
          onClick={() => handleDelete(id)}
          className="bg-red-500/30 rounded-full text-2xl ml-8 mr-1 p-2 mt-2 hover:bg-red-600 cursor-pointer transition duration-200
                    md:mt-0"
        >
          <FaRegTrashCan />
        </button>
      </div>
    </li>
  );
};

export default LoggedTodo;
