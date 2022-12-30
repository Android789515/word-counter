import { useContext } from 'react';

import { themeContext } from 'providers/theme-provider';

import { AppHeader } from 'components/app-header';
import { AppMain } from 'components/app-main';

import styles from './App.module.scss';

const App = () => {
    const { isDarkTheme } = useContext(themeContext);

    return (
        <div className={`
            ${styles.app}
            ${isDarkTheme() ? styles.appDark : ''}
        `}>
            <AppHeader />

            <AppMain />
        </div>
    );
};

export default App;