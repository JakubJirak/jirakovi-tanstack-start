import { FaRegTrashCan } from "react-icons/fa6";

interface znamka {
  znamka: number;
  vaha: number;
  index: number;
  handleDelete: (index: number) => void;
}

const Grade = ({ znamka, vaha, index, handleDelete }: znamka) => {
  return (
    <div className="flex bg-secondary py-2 items-center px-4 rounded-2xl">
      <p className="flex-1 text-xl md:text-2xl">Známka: {znamka}</p>
      <p className="flex-1 text-xl md:text-2xl">Váha: {vaha}</p>
      <button
        type="button"
        className="bg-red-500/30 rounded-full text-2xl p-2 hover:bg-red-600 cursor-pointer transition duration-200
                    md:mt-0"
        onClick={() => handleDelete(index)}
      >
        <FaRegTrashCan />
      </button>
    </div>
  );
};

export default Grade;
