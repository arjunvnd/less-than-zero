import styles from "../page.module.css";
import { Viewport } from "next";
import { Calculator } from "../components/Calculator";
import { ContactUs } from "../components/ContactUs";
import PostList from "../components/posts/post-list";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Calculator />
        <ContactUs />
        <PostList />
      </main>
    </div>
  );
}
