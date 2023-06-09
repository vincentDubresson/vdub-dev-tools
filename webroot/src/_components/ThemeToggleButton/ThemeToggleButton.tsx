import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import styles from './ThemeToggleButton.module.scss';
import { useState } from 'react';

const ThemeToggleButton = ({ themeToggle }: { themeToggle: any }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleThemeToggleClick = (themeMode: 'light' | 'dark') => {
    setTheme(themeMode);
    themeToggle(themeMode);
  };

  return (
    <button
      data-testid="theme-toggle-button"
      className={styles.button}
      onClick={() =>
        handleThemeToggleClick(theme === 'light' ? 'dark' : 'light')
      }
    >
      {theme === 'light' ? (
        <WbSunnyIcon />
      ) : (
        <NightlightOutlinedIcon sx={{ color: 'white' }} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
