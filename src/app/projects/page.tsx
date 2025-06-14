export const dynamic = 'force-dynamic';

import Header from "../../components/Header";
import styles from "../page.module.scss";
import Footer from "../../components/footer";
import ProjectContent from "../../components/projects-content";


export default function Projects() {
  return (
    <div className={styles.page}>
      <Header />
      <ProjectContent />
      <Footer />
    </div>
  );
}
