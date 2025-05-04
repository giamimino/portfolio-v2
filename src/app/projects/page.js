import Header from "@/components/Header";
import styles from "../page.module.scss";
import Footer from "@/components/footer";
import ProjectContent from "@/components/projects-content";


export default function About() {
  return (
    <div className={styles.page}>
      <Header />
      <ProjectContent />
      <Footer />
    </div>
  );
}
