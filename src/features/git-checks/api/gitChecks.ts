import type { FormText } from 'components/form';
import type { GitMessageTests, TestNames } from '../gitCheckTypes';
import { checkTitle } from './checkTitle';

export const checkCommitMessage = (userInput: FormText): GitMessageTests => {
    const didTitlePass = checkTitle(userInput);

    return {
        title: didTitlePass,
        blankLine: false,
        bodyText: false
    };
};

export const getTestNames = (name: TestNames) => {
    const registry = {
        title: 'Title',
        blankLine: 'Blank Line',
        bodyText: 'Body Text'
    };

    return registry[name];
};