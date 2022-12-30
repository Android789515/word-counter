import type { FormText } from 'components/form';

export const checkForBlankLine = (userInput: FormText) => {
    const [ , blankLine, ] = userInput.split('\n');

    return blankLine === '';
};