import styles from './Navbar.module.scss';
import logo from '../../../public/logo.svg';
import Image from 'next/image';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Link from 'next/link';

const Navbar = ({ handleThemeToggle }: { handleThemeToggle: any }) => {
  const handleThemeToggleClick = (themeMode: 'light' | 'dark') => {
    handleThemeToggle(themeMode);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <Link href="/" className={styles.button}>
          <HomeRoundedIcon />
        </Link>
        <Image className={styles.logo} src={logo} alt="logo" />
        <ThemeToggleButton themeToggle={handleThemeToggleClick} />
      </div>
      <div className={styles.menu}></div>
    </nav>
  );
};

export default Navbar;
