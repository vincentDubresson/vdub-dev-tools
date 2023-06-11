'use client';
import './globals.scss';
import styles from './page.module.scss';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import ImageIcon from '@mui/icons-material/Image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image className={styles.logo} src={logo} alt="logo" />
        <h1 className={styles.title}>
          Choisir un outil dans la liste ci-dessous
        </h1>
      </header>
      <section className={styles.button_container}>
        <Link href="/placeholder" className={styles.link}>
          <ImageIcon />
          Générateur de placeholder
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
        <Link href="/" className={styles.link}>
          En construction
        </Link>
      </section>
    </main>
  );
}
