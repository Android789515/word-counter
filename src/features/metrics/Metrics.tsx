import { Number as Num, String } from 'utils/primitives';

import type { MetricsData } from './metricTypes';
import { Metric } from './metric';

import styles from './Metrics.module.scss';

interface Props {
    metrics: MetricsData;
}

export const Metrics = ({ metrics }: Props) => {
    const MetricComponents = Object.entries(metrics).map((metric, index) => {
        const [ description, value ] = metric.map(Num.toString).map(String.capitalize);

        return (
            <Metric
                key={index}
                metric={{ description, value: Number(value) }}
            />
        );
    });

    return (
        <ul className={styles.metrics}>
            {MetricComponents}
        </ul>
    );
};