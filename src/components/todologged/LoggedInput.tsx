import { useLoginContext } from "@/data/Context/LoginContext.tsx";
import { db } from "@/db";
import { todos } from "@/db/schema.ts";
import { useMutation } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import type React from "react";
import "./reactDate.css";

interface LoggedInput {
  fetchAgain: boolean;
  setFetchAgain: React.Dispatch<React.SetStateAction<boolean>>;
}

const addTodo = createServerFn({ method: "POST" })
  .validator(
    (data: { userId: number; text: string; date: string; isDone: boolean }) =>
      data,
  )
  .handler(async ({ data }) => {
    await db
      .insert(todos)
      .values({
        text: data.text,
        date: data.date,
        isDone: data.isDone,
        userId: data.userId,
      })
      .execute();
  });

const LoggedInput = ({ fetchAgain, setFetchAgain }: LoggedInput) => {
  const [inpValue, setInpValue] = useState("");
  const [inpDate, setInpDate] = useState("");
  const [mobileShow, setMobileShow] = useState(false);
  const { userId } = useLoginContext();

  const mutationTodos = useMutation({
    mutationFn: addTodo,
    onError: (err) => console.log(err),
    onSuccess: () => setFetchAgain(!fetchAgain),
  });

  const addUserMutation = () => {
    mutationTodos.mutate({
      data: {
        text: inpValue,
        userId: Number(userId),
        date: inpDate,
        isDone: false,
      },
    });
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUserMutation();
    setInpDate("");
    setInpValue("");
  };

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={` ${mobileShow ? "grid" : "hidden"} absolute w-full h-[100vh] z-20 bg-black/80 top-0 left-0
            md:hidden`}
        onClick={() => {
          setMobileShow(!mobileShow);
        }}
      />

      <form
        onSubmit={handleAdd}
        className={` ${mobileShow ? "grid" : "hidden"} absolute -translate-x-1/2 left-1/2 top-[20vh] w-[90%] bg-primary-900 p-2 text-xl items-center rounded-xl z-20 px-3 mb-4
                  md:flex md:relative md:grid-rows-1 md:top-[unset] md:w-full md:h-auto md:px-2`}
      >
        <label htmlFor="valInp" className="md:hidden m-1 text-gray-200">
          Zadejte úkol
        </label>
        <input
          value={inpValue}
          type="text"
          placeholder="Úkol..."
          required
          id="valInp"
          className="px-2 focus:outline-none w-full py-2 mb-4 rounded-lg bg-primary-800
                       md:py-0 md:my-0 md:bg-transparent"
          onChange={(e) => setInpValue(e.target.value)}
        />
        <label htmlFor="dateInp" className="md:hidden m-1 text-gray-200">
          Zadejte datum
        </label>
        <input
          className="mb-6 w-full bg-primary-800 py-2 px-2 rounded-lg focus:outline-none
                md:w-40 md:my-0 md:mb-0"
          placeholder="Datum..."
          type="date"
          required
          id="dateinp"
          value={inpDate}
          onChange={(e) => setInpDate(e.target.value)}
        />

        <button
          onClick={() => setMobileShow(!mobileShow)}
          className="bg-secondary-800 flex rounded-full items-center justify-center hover:bg-secondary-900 cursor-pointer transition duration-200 h-10 mb-1.5
                    md:ml-3 md:mr-1 md:mb-0"
          type="submit"
        >
          <span className="md:hidden mr-2">Přidat</span>
          <span
            className="hidden text-5xl font-light
                    md:flex md:w-10 md:h-10 md:mb-4 md:pl-1"
          >
            +
          </span>
        </button>
      </form>
      <button
        type="button"
        className="bg-secondary-800 flex rounded-full ml-3 mr-1 hover:bg-secondary-900 cursor-pointer transition duration-200 z-11 fixed bottom-8 right-7
                md:hidden"
        onClick={() => {
          setMobileShow(!mobileShow);
        }}
      >
        <span className="w-17 relative z-17 h-17 flex items-center justify-center text-7xl font-light">
          +
        </span>
      </button>
    </>
  );
};
export default LoggedInput;
