'use client'

import Link from 'next/link';
import styles from '../styles/footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <Link href="">find me in:</Link>
        <Link href="https://x.com/Dev103116" target="_blank"><Image src="svg/x.svg" alt="img"
        width={24}
        height={24} /></Link>
        <Link href="https://www.linkedin.com/in/gia-miminoshvili-2a89642aa/" target="_blank"><Image src="svg/in.svg" alt="img"
        width={24}
        height={24} /></Link>
        <Link href="https://github.com/giamimino" target="_blank">@giamimino <Image src="svg/github.svg" alt="img"
        width={24}
        height={24} /></Link>
      </ul>
    </footer>
  )
}

export default Footer;