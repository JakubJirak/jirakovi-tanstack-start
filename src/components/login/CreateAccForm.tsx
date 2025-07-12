import { authClient } from "@/lib/auth-client.ts";
import { type Dispatch, type SetStateAction, useState } from "react";
import type React from "react";

interface LoginForm {
  setZalozit: Dispatch<SetStateAction<boolean>>;
}

const SignInForm = ({ setZalozit }: LoginForm) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [created, setCreated] = useState(false);

  const validate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await authClient.signUp.email(
      {
        email,
        password,
        name,
        callbackURL: "/todologged", // A URL to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          alert("Ucet vytvoren!");
          setLoading(false);
          setCreated(true);
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
      {!created && (
        <form
          onSubmit={validate}
          className="bg-card border border-border w-[90%] flex flex-col rounded-2xl p-4 text-xl max-w-[480px] mx-auto mt-4"
        >
          <h1 className="text-center text-3xl font-semibold mb-8">
            Vytvořit účet
          </h1>
          <label className="mb-1 text-lg text-muted-foreground" htmlFor="name">
            Uživatelské jméno
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className="bg-secondary focus:outline-none px-2 py-1 rounded-lg mb-6"
          />
          <label className="mb-1 text-lg text-muted-foreground" htmlFor="email">
            Email
          </label>
          <input
            required
            value={email}
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="bg-secondary focus:outline-none px-2 py-1 rounded-lg mb-6 placeholder:text-lg"
          />
          <label
            className="mb-1 text-lg text-muted-foreground"
            htmlFor="password"
          >
            Heslo (min 8 znaků)
          </label>
          <input
            required
            value={password}
            min={8}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="bg-secondary focus:outline-none px-2 py-1 rounded-lg mb-6"
          />
          <button
            type="submit"
            className="bg-primary mt-2 py-1 rounded-full hover:bg-secondary-800 cursor-pointer transition duration-200"
          >
            {loading ? "Načítaní" : "Vytvořit účet"}
          </button>
          <button
            type="button"
            className="hover:underline cursor-pointer text-lg mt-4 text-center"
            onClick={() => setZalozit(false)}
          >
            Zpět na přihlášení
          </button>
          <p
            className={`${error !== "" && "mt-5"} text-red-500 text-center text-lg`}
          >
            {error}
          </p>
        </form>
      )}
      {created && (
        <h1 className="text-2xl text-center mt-3">
          Váš účet byl úspěšně vytvořen. Nyní se přihlaste
        </h1>
      )}
      {created && (
        <button
          className="text-2xl bg-secondary-800 py-2 px-4 rounded-2xl flex mx-auto mt-10 cursor-pointer hover:bg-secondary-900 transition-all duration-200"
          onClick={() => setZalozit(false)}
          type="button"
        >
          Přihlásit se
        </button>
      )}
    </>
  );
};

export default SignInForm;
