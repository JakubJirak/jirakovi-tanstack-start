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
          className="mr-5 bg-primary flex items-center p-1.5 rounded-xl border-border border cursor-pointer hover:bg-accent transition-all duration-200"
        >
          <FiLogOut size={25} />
        </button>
      )}

      {!session && (
        <Link
          to={linkOptions({ to: "/login" }).to}
          type="button"
          className="text-xl mr-3 bg-primary flex items-center py-1 px-3 rounded-xl cursor-pointer transition-all duration-200"
        >
          Přihlásit
        </Link>
      )}
    </header>
  );
}

export default Header;
