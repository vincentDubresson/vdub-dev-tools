'use client';
import './globals.scss';
import styles from './page.module.scss';
import logo from '../../public/logo.svg';
import Image from 'next/image';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
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
          <AspectRatioOutlinedIcon />
          <h2>Générateur de placeholder</h2>
          <p className={styles.description}>
            Personnalisez la taille, le type de fichier et les couleurs pour
            obtenir des espaces réservés adaptés à vos besoins de conception.
          </p>
        </Link>
      </section>
    </main>
  );
}
