'use client';
import styles from './Navbar.module.scss';
import logo from '../../../public/logo.svg';
import Image from 'next/image';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import { NavbarTitles } from '@/data/NavbarTitles';
import { useEffect, useState } from 'react';

const Navbar = ({ handleThemeToggle }: { handleThemeToggle: any }) => {
  const [pageTitle, setPageTitle] = useState('Accueil');
  const handleThemeToggleClick = (themeMode: 'light' | 'dark') => {
    handleThemeToggle(themeMode);
  };

  const getTitleFromUrl = (url: string) => {
    const title = NavbarTitles.find((title) => title.url === url);
    return title ? title.title : 'Accueil';
  };

  useEffect(() => {
    setPageTitle(getTitleFromUrl(window.location.pathname));
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <Link href="/" className={styles.button}>
          <HomeRoundedIcon />
        </Link>
        <Image className={styles.logo} src={logo} alt="logo" />
        <ThemeToggleButton themeToggle={handleThemeToggleClick} />
      </div>
      <div className={styles.title}>{pageTitle}</div>
      <div className={styles.contact}>
        <Link href="#">
          <EmailIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
