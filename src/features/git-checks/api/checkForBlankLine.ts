import type { FormText } from 'components/form';

export const checkForBlankLine = (userInput: FormText) => {
    const [ /* title */, blankLine, /* body */ ] = userInput.split('\n');

    return blankLine === '';
};