import passIcon from './assets/icon-set-1/check1.svg';
import failIcon from './assets/icon-set-1/x1.svg';
import styles from './GitMessageCheck.module.scss';

interface Props {
    name: string;
    didPass: boolean;
}

export const GitMessageCheck = ({ name, didPass }: Props) => {
    return (
        <li className={styles.gitMessageCheck}>
            {name}
            <img
                src={didPass ? passIcon : failIcon}
                alt={'Pass / Fail Indicator'}
                className={styles.passFailIndicator}
            />
        </li>
    );
};