import styles from "./page.module.css";
import test from "./test.module.css";
import clsx from "clsx";

export default function Home() {
  const status = "error";
  return (
    <main
      className={clsx(styles.main, {
        red: status == "error",
        green: status != "error",
      })}
    >
      <h1 className={`${styles.class1} ${test.class1} `}>C moi uesh</h1>
    </main>
  );
}
