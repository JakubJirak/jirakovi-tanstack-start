import { authClient } from "@/lib/auth-client.ts";
import { Link, linkOptions } from "@tanstack/react-router";
import { FiLogOut } from "react-icons/fi";

function Header() {
  const odhlasit = async () => {
    await authClient.signOut();
  };

  const { data: session } = authClient.useSession();

  return (
    <header className="[grid-area:header] border-b-2 border-border flex items-center justify-end">
      {session && <p className="text-xl mr-3">{session.user.name}</p>}
      {session && (
        <button
          onClick={odhlasit}
          type="button"
          className="mr-5 bg-secondary flex items-center p-2 rounded-2xl border-border border cursor-pointer hover:bg-accent transition-all duration-200"
        >
          <FiLogOut size={30} />
        </button>
      )}

      {!session && (
        <Link
          to={linkOptions({ to: "/login" }).to}
          type="button"
          className="text-xl mr-3 bg-primary-800 flex items-center p-2.5 rounded-2xl cursor-pointer hover:bg-primary-700 transition-all duration-200"
        >
          Přihlásit
        </Link>
      )}
    </header>
  );
}

export default Header;
