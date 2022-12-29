import type { MetricsData } from 'features/metrics';

import { CheckMessageButton } from './components/check-message-button';
import useToggleShow from './useToggleShow';

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
                <li>Title</li>
                <li>Blank Line</li>
                <li>Body Text</li>
            </ul>
        </div>
    );
};