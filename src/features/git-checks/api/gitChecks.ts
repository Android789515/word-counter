import type { FormText } from 'components/form';
import type { GitMessageTests } from '../gitCheckTypes';
import { Bool, Str } from 'utils/primitives';

const checkTitle = (userInput: FormText) => {
    const titleLine = userInput.split('\n').at(0)!;

    const maxTitleLength = 50;
    const passesInitialChecks = Object.values({
        isNotEmpty: Str.isNotEmpty(titleLine),
        hasNoPeriod: titleLine.at(-1)! !== '.',
        is50LettersOrLess: titleLine.length <= maxTitleLength,
        startsWithLetter: /[a-zA-Z]/.test(titleLine.charAt(0))
    }).every(Bool.doesPass);

    const passesBasicConventionsChecks = Object.values({
        isCapitalized: Str.isCapitalized(titleLine),
    }).every(Bool.doesPass);

    if (passesInitialChecks) {
        return passesBasicConventionsChecks;
    }

    return false;
};

export const checkCommitMessage = (userInput: FormText): GitMessageTests => {
    const didTitlePass = checkTitle(userInput);

    return {
        title: didTitlePass,
        blankLine: false,
        bodyText: false
    };
};