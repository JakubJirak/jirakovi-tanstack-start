import type React from "react";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface TodoItem {
  value: string;
  date: string;
  isDone: boolean;
}

interface TodoContextType {
  dataArr: TodoItem[];
  setDataArr: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [dataArr, setDataArr] = useState<TodoItem[]>([]);

  useEffect(() => {
    setDataArr(() => {
      const data = window.localStorage.getItem("todoArray");
      return data ? JSON.parse(data) : [];
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todoArray", JSON.stringify(dataArr));
  }, [dataArr]);

  return (
    <TodoContext.Provider value={{ dataArr, setDataArr }}>
      {children}
    </TodoContext.Provider>
  );
};
