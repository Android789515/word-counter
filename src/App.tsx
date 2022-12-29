import { useContext, useState } from 'react';

import type { FormText } from 'components/form';
import { themeContext } from 'providers/theme-provider';

import { AppHeader } from 'components/app-header';
import { Layout } from 'components/layout';
import { InfoSection } from 'components/info-section';

import { getMetrics, Metrics } from 'features/metrics';
import { GitChecks } from 'features/git-checks';
import { TextEnter } from 'features/text-enter';

import styles from './App.module.scss';

const App = () => {
    const { isDarkTheme } = useContext(themeContext);

    const [ userInput, updateUserInput ] = useState<FormText>('');

    const metrics = getMetrics(userInput);

    return (
        <div className={`
            ${styles.app}
            ${isDarkTheme() ? styles.appDark : ''}
        `}>
            <AppHeader/>

            <Layout>
                <InfoSection>
                    <Metrics
                        metrics={metrics}
                    />

                    <GitChecks
                        metrics={metrics}
                    />
                </InfoSection>

                <TextEnter
                    userInput={userInput}
                    updateUserInput={updateUserInput}
                />
            </Layout>
        </div>
    );
};

export default App;