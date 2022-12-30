import type { FormText } from 'components/form';
import type { GitMessageTests, TestNames } from '../gitCheckTypes';
import { checkTitle } from './checkTitle';
import { checkForBlankLine } from './checkForBlankLine';

export const checkCommitMessage = (userInput: FormText): GitMessageTests => {
    const didTitlePass = checkTitle(userInput);
    const isBlankLinePresent = checkForBlankLine(userInput);

    return {
        title: didTitlePass,
        blankLine: isBlankLinePresent,
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