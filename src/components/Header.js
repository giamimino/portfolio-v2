'use client'

import styles from "../styles/header.module.scss";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <h1>gia-miminoshvili</h1>
      <ul>
        <li className={pathname === '/' ? styles.active : ''}>_hello</li>
        <li className={pathname === '/about' ? styles.active : ''}>_about-me</li>
        <li className={pathname === '/projects' ? styles.active : ''}>_projects</li>
        <li className={pathname === '/contact' ? styles.active : ''}>_contact-me</li>
      </ul>
    </header>
  )
}

export default Header;