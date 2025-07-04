import { useLoginContext } from "@/data/Context/LoginContext.tsx";
import { authClient } from "@/lib/auth-client.ts";
import { type Dispatch, type SetStateAction, useState } from "react";
import type React from "react";

interface LoginForm {
  setZalozit: Dispatch<SetStateAction<boolean>>;
}

const LoginForm = ({ setZalozit }: LoginForm) => {
  const { password, setPassword, setLogged } = useLoginContext();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validate2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogged(true);

    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/todologged",
        rememberMe: true,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          console.log("logged");
          setLoading(false);
        },
        onError: (ctx) => {
          setError(ctx.error.message);
          setLoading(false);
        },
      },
    );
  };

  return (
    <>
      <form
        onSubmit={validate2}
        className="bg-primary-900 w-[90%] flex flex-col rounded-2xl p-4 text-xl max-w-[480px] mx-auto mt-4"
      >
        <h1 className="text-center text-3xl font-semibold mb-8">
          Přihlásit se
        </h1>
        <label className="mb-2 text-gray-200 text-lg" htmlFor="username">
          Email
        </label>
        <input
          required
          value={email}
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="username"
          className="bg-primary-800 focus:outline-none px-2 py-1 rounded-lg mb-6 placeholder:text-lg"
        />
        <label className="mb-2 text-gray-200 text-lg" htmlFor="password">
          Heslo
        </label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          className="bg-primary-800 focus:outline-none px-2 py-1 rounded-lg mb-6"
        />
        <button
          type="submit"
          className="bg-secondary-700 mt-2 py-1 rounded-full hover:bg-secondary-800 cursor-pointer transition duration-200"
        >
          {loading ? "Načítaní" : "Přihlásit se"}
        </button>
        <p className="text-lg mt-4 text-center">
          Nemáte účet?{" "}
          <button
            onClick={() => setZalozit(true)}
            className="hover:underline cursor-pointer"
            type="button"
          >
            Zaregistrujte se
          </button>
        </p>
        <p
          className={`${error !== "" && "mt-5"} text-red-500 text-center text-lg`}
        >
          {error}
        </p>
      </form>
    </>
  );
};

export default LoginForm;
