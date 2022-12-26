import type { MetricInfo } from '../metricTypes';

import styles from './Metric.module.scss';

interface Props {
    metric: MetricInfo;
}

export const Metric = ({ metric: { description, value } }: Props) => {
    return (
        <li className={styles.metric}>
            <span>
                {description}
            </span>

            <span>
                :
            </span>

            <span className={styles.metricValue}>
                {value}
            </span>
        </li>
    );
};