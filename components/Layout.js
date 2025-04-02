import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  // Function to set theme based on localStorage
  const setAppTheme = () => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Handle system-wide dark mode preference
  const handleSystemThemeChange = () => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
    handleSystemThemeChange();
  }, []);

  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
        <header className="py-6 text-center">
          <h1 className="text-2xl font-bold dark:text-white text-gray-900">
            🚀 Welcome to <span className="text-primary">DronAero</span>
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Drone-Based Delivery Solutions: B2B | B2C | C2C
          </p>
        </header>

        {children}
      </div>
    </div>
  );
}