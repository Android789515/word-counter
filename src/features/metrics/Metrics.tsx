import { Info, InfoGroup } from 'components/info-group';

interface Props {
    metrics: Info[]
}

export const Metrics = ({ metrics }: Props) => {
    return (
        <InfoGroup
            styleClass={''}
            infoToDisplay={metrics}
            renderInfoComponent={({ description, value }) => {
                return (
                    <li>
                        {description}: {value}
                    </li>
                );
            }}
        />
    );
};