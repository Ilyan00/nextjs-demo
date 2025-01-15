import Image from "next/image";
import styles from "./page.module.css";
import test from "./test.module.css";
import clsx from "clsx";
import { roboto400, roboto700 } from "@/fonts/fonts";

export default function Home() {
  const status = "error";
  return (
    <main
      className={clsx(styles.main, {
        red: status == "error",
        green: status != "error",
      })}
    >
      <h1 className={`${styles.class1} ${test.class1} ${roboto400.className}`}>
        C moi uesh
      </h1>
    </main>
  );
}
