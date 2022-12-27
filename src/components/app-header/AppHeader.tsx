import { useContext } from 'react';

import { themeContext } from 'providers/theme-provider';
import { ToggleSwitch } from 'components/toggle-switch';

import styles from './AppHeader.module.scss';

export const AppHeader = () => {
    const { isLightTheme, toggleTheme, getThemeIcon } = useContext(themeContext);

    return (
        <header className={styles.appHeader}>
            <ToggleSwitch
                isInitiallyToggledOn={!isLightTheme()}
                icon={getThemeIcon()}
                whenToggledOn={toggleTheme}
                whenToggledOff={toggleTheme}
            />
        </header>
    );
};