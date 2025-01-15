import { useRouter } from "next/navigation";
import { logout } from "@/utils/sessions";

export default function Nav() {
  const router = useRouter();

  const Logout = () => {
    logout();
    return router.push("/login");
  };

  return (
    <nav>
      <button onClick={Logout}>Logout</button>
    </nav>
  );
}
