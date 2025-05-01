import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import HomeMainContent from "@/components/home-main-content";
import Link from "next/link";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HomeMainContent />
      <Footer />
    </div>
  );
}
