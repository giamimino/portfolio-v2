'use client'
import { useState } from "react";
import styles from "../styles/header.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TransitionLink } from "./transitionLink";

const Header = () => {
  const pathname = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggle = () => {
    setMenuVisible(prev => !prev);
  };

  return (
    <>
    <header className={styles.header}>
      <h1>gia-miminoshvili</h1>
      <ul>
        <TransitionLink href="/" className={pathname === '/' ? styles.active : ''}>_hello</TransitionLink>
        <TransitionLink href="/about" className={pathname === '/about' ? styles.active : ''}>_about-me</TransitionLink>
        <TransitionLink href="/projects" className={pathname === '/projects' ? styles.active : ''}>_projects</TransitionLink>
        <TransitionLink href="/contact" className={pathname === '/contact' ? styles.active : ''}>_contact-me</TransitionLink>
      </ul>
    </header>

    <header className={styles.mobileHeader}>
      <header>
      <h1>gia-miminoshvili</h1> 
      <input type="checkbox" id="menu-toggle" className={styles.checkbox} onClick={handleToggle} />
      <label htmlFor="menu-toggle" className={styles.hamburger}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </label>
      </header>


        <aside className={`${styles.slide} ${styles[menuVisible ? "show" : ""]}`} id="menu">
            <p># navigate:</p>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>_hello</Link>
            <Link href="/about" className={pathname === '/about' ? styles.active : ''}>_about-me</Link>
            <Link href="/projects" className={pathname === '/projects' ? styles.active : ''}>_projects</Link>
            <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>_contact-me</Link>
        </aside>
    </header>
    </>
  )
}

export default Header;