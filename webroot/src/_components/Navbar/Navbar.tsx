import styles from './Navbar.module.scss';
import logo from '../../../public/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <Image className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles.menu}></div>
    </nav>
  );
};

export default Navbar;
