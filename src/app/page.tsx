import styles from "./page.module.scss";
import HomeMainContent from "../components/home-main-content";
import Footer from "../components/footer";
import Header from "../components/Header";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HomeMainContent />
      <Footer />
    </div>
  );
}
