import { ReactNode, Fragment } from 'react';

import type { ClassName } from 'types';
import type { Info } from './infoTypes';

import styles from './InfoGroup.module.scss';

interface Props {
    styleClass?: ClassName;
    infoToDisplay: Info[];
    renderInfoComponent: (info: Info) => ReactNode;
}

export const InfoGroup = ({ styleClass, infoToDisplay, renderInfoComponent }: Props) => {
    const InfoComponents = infoToDisplay.map((info, index) => {
        return (
            <Fragment key={index}>
                {renderInfoComponent(info)}
            </Fragment>
        );
    });

    return (
        <ul
            className={`
                ${styles.infoGroupDefaults}
                ${styleClass}
            `}
        >
            {InfoComponents}
        </ul>
    );
};