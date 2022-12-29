import type { FormText } from 'components/form';
import type { Entries } from 'types/objectTypes';
import type { GitMessageTests } from './gitCheckTypes';

import useToggleShow from './useToggleShow';
import { checkCommitMessage, getTestNames } from './api/gitChecks';
import { CheckMessageButton } from './components/check-message-button';
import { GitMessageCheck } from './components/git-message-check';

import styles from './GitChecks.module.scss';

interface Props {
    userInput: FormText;
}

export const GitChecks = ({ userInput }: Props) => {
    const { isShown, toggleShown } = useToggleShow();

    return (
        <div className={styles.gitChecksLayout}>
            <CheckMessageButton
                onClick={toggleShown}
            />

            <ul className={isShown ? styles.gitChecks : styles.gitChecksHidden}>
                <GitMessageCheck
                    name={'Title'}
                    didPass={false}
                />

                <GitMessageCheck
                    name={'Blank Line'}
                    didPass={false}
                />

                <GitMessageCheck
                    name={'Body Text'}
                    didPass={false}
                />
            </ul>
        </div>
    );
};