import styles from "./page.module.css";
import { Viewport } from "next";
import { Calculator } from "./components/Calculator";
import { ContactUs } from "./components/ContactUs";
import { Header } from "./components/Header";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Calculator />
        <ContactUs />
      </main>
    </div>
  );
}
