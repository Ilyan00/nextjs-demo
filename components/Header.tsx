"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { logout } from "@/utils/sessions";

export default function Header() {
  const router = useRouter();

  const Logout = () => {
    logout();
    return router.push("/login");
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <nav>
      <Link
        href="/mon-compte"
        className={clsx("", {
          active: pathname === "/mon-compte",
        })}
      >
        Mon compte
      </Link>
      <Link
        href="/mon-compte/profil"
        className={clsx("", {
          active: pathname === "/mon-compte/profil",
        })}
      >
        Mon profil
      </Link>
      <p>Bienvenue {searchParams.get("name")} </p>
      <button onClick={Logout}>Logout</button>
    </nav>
  );
}
