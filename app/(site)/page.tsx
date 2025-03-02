import styles from "../page.module.css";
import { Viewport } from "next";
import { Calculator } from "../components/Calculator";
import PostList from "../components/posts/post-list";
import TopSectionContainer from "../components/TopSection/top-section-container";
import Footer from "../components/common/footer";
// import GeneralInfo from "../components/common/general-info";
import { ContactUs } from "../components/ContactUs";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TopSectionContainer />
        <Calculator />
        <PostList />
        <ContactUs />
        {/* <GeneralInfo /> */}
        <Footer />
      </main>
    </div>
  );
}
