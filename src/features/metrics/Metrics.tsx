import { Info, InfoGroup } from 'components/info-group';
import { Metric } from './metric/Metric';

import styles from './Metrics.module.scss';

interface Props {
    metrics: Info[]
}

export const Metrics = ({ metrics }: Props) => {
    return (
        <InfoGroup
            styleClass={styles.metrics}
            infoToDisplay={metrics}
            renderInfoComponent={metric => (
                <Metric
                    metric={metric}
                />
            )}
        />
    );
};