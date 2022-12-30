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

    const gitMessageChecks = Object.entries(checkCommitMessage(userInput)) as Entries<GitMessageTests>;

    const GitMessageChecks = gitMessageChecks.map(([ testName, test ], index) => {
        return (
            <GitMessageCheck
                key={index}
                name={getTestNames(testName)}
                didPass={test}
            />
        );
    });

    return (
        <div className={styles.gitChecksLayout}>
            <CheckMessageButton
                onClick={toggleShown}
            />

            <ul className={isShown ? styles.gitChecks : styles.gitChecksHidden}>
                {GitMessageChecks}
            </ul>
        </div>
    );
};