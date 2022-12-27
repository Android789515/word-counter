import sunIcon from './assets/sun.svg';
import moonIcon from './assets/moon.svg';
import styles from './ThemeIcon.module.scss';

interface Props {
    isDarkTheme?: boolean;
}

export const ThemeIcon = ({ isDarkTheme }: Props) => {
    return (
        <img
            src={isDarkTheme ? moonIcon : sunIcon}
            alt={'Theme Icon'}
            className={isDarkTheme ? styles.themeIconDark : styles.themeIconLight}
        />
    );
};