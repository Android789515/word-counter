import { useState } from 'react';

import type { FormText } from 'components/form';

import { Layout } from 'components/layout';

import { InfoSection } from 'components/info-section';
import { getMetrics, Metrics } from 'features/metrics';
import { GitChecks } from 'features/git-checks';

import { TextEnter } from 'features/text-enter';

export const AppMain = () => {
    const [ userInput, updateUserInput ] = useState<FormText>('');

    return (
        <main>
            <Layout>
                <InfoSection>
                    <Metrics
                        metrics={getMetrics(userInput)}
                    />

                    <GitChecks
                        userInput={userInput}
                    />
                </InfoSection>

                <TextEnter
                    userInput={userInput}
                    updateUserInput={updateUserInput}
                />
            </Layout>
        </main>
    );
};