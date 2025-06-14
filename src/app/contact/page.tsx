import Header from "../../components/Header";
import styles from "../page.module.scss";
import Footer from "../../components/footer";
import ContactC from "../../components/contactForm";


export default function Contacts() {
  return (
    <div className={styles.page}>
      <Header />
      <ContactC />
      <Footer />
    </div>
  );
}
