import Header from "../../components/Header";
import styles from "../page.module.scss";
import Footer from "../../components/footer";
import { ContactUs } from "../../components/contactForm";


export default function Contacts() {
  return (
    <div className={styles.page}>
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}
