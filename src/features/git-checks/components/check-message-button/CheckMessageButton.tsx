import { useContext } from 'react';

import { themeContext } from 'providers/theme-provider';

import styles from './CheckMessageButton.module.scss';

interface Props {
    onClick(): void;
}

export const CheckMessageButton = ({ onClick }: Props) => {
    const { isDarkTheme } = useContext(themeContext);

    return (
        <button
            className={`
                ${styles.checkMessageButton}
                ${isDarkTheme() ? styles.checkMessageButtonDark : ''}
            `}
            onClick={onClick}
        >
            Git-Check
        </button>
    );
};