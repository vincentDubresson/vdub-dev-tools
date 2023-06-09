import './globals.scss';
import styles from './page.module.scss';
import logo from '../../public/logo.svg';
import Image from 'next/image';

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
        <button className={styles.button}></button>
        <button className={styles.button}></button>
        <button className={styles.button}></button>
        <button className={styles.button}></button>
      </section>
    </main>
  );
}
