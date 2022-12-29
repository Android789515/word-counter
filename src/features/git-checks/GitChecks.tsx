import type { MetricsData } from 'features/metrics';

import styles from './GitChecks.module.scss';

interface Props {
    metrics: MetricsData;
}

export const GitChecks = ({ metrics }: Props) => {
    return (
        <div className={styles.gitChecksLayout}>
            <ul className={styles.gitChecks}>
                <li>Title</li>
                <li>Blank Line</li>
                <li>Body Text</li>
            </ul>
        </div>
    );
};