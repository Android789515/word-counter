import passIcon from 'features/git-checks/components/git-message-check/assets/pass.svg';
import failIcon from 'features/git-checks/components/git-message-check/assets/fail.svg';
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
                className={`
                    ${styles.passFailIndicator}
                    ${didPass ? styles.pass : styles.fail}
                `}
            />
        </li>
    );
};