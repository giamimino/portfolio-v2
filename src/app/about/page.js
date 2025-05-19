import Header from "@/components/Header";
import styles from "../page.module.scss";
import Footer from "@/components/footer";
import AboutContent from "@/components/about-content";


export default function About() {
  return (
    <div className={styles.page}>
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
}
