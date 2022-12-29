import type { MetricsData } from 'features/metrics';

import useToggleShow from './useToggleShow';
import { CheckMessageButton } from './components/check-message-button';
import { GitMessageCheck } from './components/git-message-check';

import styles from './GitChecks.module.scss';

interface Props {
    metrics: MetricsData;
}

export const GitChecks = ({ metrics }: Props) => {
    const { isShown, toggleShown } = useToggleShow();

    return (
        <div className={styles.gitChecksLayout}>
            <CheckMessageButton
                onClick={toggleShown}
            />

            <ul className={isShown ? styles.gitChecks : styles.gitChecksHidden}>
                <GitMessageCheck
                    name={'Title'}
                    didPass={false}
                />

                <GitMessageCheck
                    name={'Blank Line'}
                    didPass={false}
                />

                <GitMessageCheck
                    name={'Body Text'}
                    didPass={false}
                />
            </ul>
        </div>
    );
};