import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Fitness Tracker</p>
      <button className={styles.button}>Sign Up</button>
    </main>
  );
}
