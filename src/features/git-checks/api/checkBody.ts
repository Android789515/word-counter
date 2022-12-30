import type { FormText } from 'components/form';

const doesBodyWrapAt72 = (userInput: FormText) => {
    return userInput.split('\n').every(line => {
        return line.length <= 72;
    });
};

export const checkBody = (userInput: FormText) => {
    return doesBodyWrapAt72(userInput);
};