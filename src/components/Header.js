'use client'

import styles from "../styles/header.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
    <header className={styles.header}>
      <h1>gia-miminoshvili</h1>
      <ul>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>_hello</Link>
        <Link href="/about" className={pathname === '/about' ? styles.active : ''}>_about-me</Link>
        <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>_projects</Link>
        <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>_contact-me</Link>
      </ul>
    </header>

    <header className={styles.mobileHeader}>
      <header>
      <h1>gia-miminoshvili</h1> 
      <input type="checkbox" id="menu-toggle" className={styles.checkbox} />
      <label htmlFor="menu-toggle" className={styles.hamburger}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </label>
      </header>

      <div className={styles.slide}>
          <p># navigate:</p>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>_hello</Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>_about-me</Link>
          <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>_projects</Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>_contact-me</Link>
      </div>
    </header>
    </>
  )
}

export default Header;