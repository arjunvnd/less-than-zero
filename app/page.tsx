import Image from "next/image";
import styles from "./page.module.css";
// import Timer from "./components/timer/Timer";
import { Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/logo.jpg"
          alt="Less Than Zero logo"
          width={73}
          height={73}
          priority
        />
        <a href="mailto:hello@lessthanzero.in">
          Say hello! hello@lessthanzero.in
        </a>
      </header>
      <main className={styles.main}>
        <h1>We Are Coming Soon</h1>
        <p>
          We&apos;re strong believers that the best solutions come from
          gathering new insights and pushing conventional boundaries.
        </p>
        <div>{/* <Timer /> */}</div>
      </main>
    </div>
  );
}
