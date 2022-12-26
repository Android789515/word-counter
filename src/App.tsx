import { useState, useContext } from 'react';

import type { FormText } from 'components/form';
import { themeContext } from 'providers/theme-provider';

import { AppHeader } from 'components/app-header';
import { Layout } from 'components/layout';
import { getMetrics, Metrics } from 'features/metrics';
import { TextEnter } from 'features/text-enter';

import styles from './App.module.scss';

const App = () => {
    const { isDarkTheme } = useContext(themeContext);

    const [ userInput, updateUserInput ] = useState<FormText>('');

    return (
        <div className={`
            ${styles.app}
            ${isDarkTheme() ? styles.appDark : ''}
        `}>
            <AppHeader />

            <Layout>
                <Metrics
                    metrics={getMetrics(userInput)}
                />

                <TextEnter
                    userInput={userInput}
                    updateUserInput={updateUserInput}
                />
            </Layout>
        </div>
    );
};

export default App;