import { authClient } from "@/lib/auth-client.ts";
import { useState } from "react";
import type React from "react";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        callbackURL: "/todologged", // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          console.log(data);
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
        onSubmit={validate}
        className="bg-primary-900 w-[90%] flex flex-col rounded-xl p-4 text-xl max-w-[500px] mx-auto mt-4"
      >
        <h1 className="text-center text-3xl font-semibold mb-5">
          Vytvořit účet
        </h1>
        <label className="mb-1 text-gray-300 text-lg" htmlFor="name">
          Uživatelské jméno
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className="bg-primary-800 focus:outline-none px-2 py-1 rounded-lg mb-4"
        />
        <label className="mb-1 text-gray-300 text-lg" htmlFor="email">
          Email
        </label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          className="bg-primary-800 focus:outline-none px-2 py-1 rounded-lg mb-4"
        />
        <label className="mb-1text-gray-300 text-lg" htmlFor="password">
          Heslo
        </label>
        <input
          required
          value={password}
          min={8}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          className="bg-primary-800 focus:outline-none px-2 py-1 rounded-lg mb-4"
        />
        <button
          type="submit"
          className="bg-secondary-700 mt-2 py-1 rounded-full hover:bg-secondary-800 cursor-pointer transition duration-200"
        >
          {loading ? "Načítaní" : "Vytvořit účet"}
        </button>
        <p
          className={`${error !== "" && "mt-5"} text-red-500 text-center text-lg`}
        >
          {error}
        </p>
      </form>
    </>
  );
};

export default SignInForm;
