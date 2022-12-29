import type { ReactNode } from 'react';

import styles from './InfoSection.module.scss';

interface Props {
    children: ReactNode;
}

export const InfoSection = ({ children }: Props) => {
    return (
        <section className={styles.infoSection}>
            {children}
        </section>
    );
};