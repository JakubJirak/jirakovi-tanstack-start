import { useLoginContext } from "@/data/Context/LoginContext.tsx";
import { db } from "@/db";
import { users } from "@/db/schema.ts";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import type React from "react";

interface User {
  id: number;
  username: string | null;
  password: string | null;
}

const getUser = createServerFn({ method: "GET" })
  .validator((data: { username: string }) => data)
  .handler(async ({ data }) => {
    const rows = await db
      .select()
      .from(users)
      .where(eq(users.username, data.username));
    return rows[0];
  });

const LoginForm = () => {
  const { username, setUsername, password, setPassword, setLogged, setUserId } =
    useLoginContext();
  const [valid, setValid] = useState<boolean>(true);
  const navigate = useNavigate();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setPassword("");
  }, []);

  const { refetch, error, isLoading } = useQuery<User | undefined>({
    queryKey: ["users", { data: username }],
    queryFn: () => getUser({ data: { username } }),
    enabled: false,
  });

  const validate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const refData = await refetch();
    if (!refData.data) {
      setValid(false);
      return;
    }
    if (refData.data?.password === password) {
      console.log("prihlasen");
      navigate({ to: "/todologged" });
      setLogged(true);
      setValid(true);
      setUserId(String(refData.data.id));
    }
  };

  return (
    <>
      <form
        onSubmit={validate}
        className="bg-primary-900 w-[90%] flex flex-col rounded-xl p-4 text-xl max-w-[500px] mx-auto mt-4"
      >
        <label className="mb-1 text-gray-300 text-lg" htmlFor="username">
          Uživatelské jméno
        </label>
        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          className="bg-primary-800 focus:outline-none px-2 py-1 rounded-lg mb-4"
        />
        <label className="mb-1text-gray-300 text-lg" htmlFor="password">
          Heslo
        </label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          className="bg-primary-800 focus:outline-none px-2 py-1 rounded-lg mb-4"
        />
        <button
          type="submit"
          className="bg-secondary-700 mt-2 py-1 rounded-full hover:bg-secondary-800 cursor-pointer transition duration-200"
        >
          {isLoading ? "Načítání..." : "Přihlásit se"}
        </button>
      </form>

      {error ? (
        <p className="text-center text-red-500 mt-5">
          Nesprávné uživatelské jméno nebo heslo!
        </p>
      ) : (
        !valid && (
          <p className="text-center text-red-500 mt-5">
            Nesprávné uživatelské jméno nebo heslo!
          </p>
        )
      )}
    </>
  );
};

export default LoginForm;
