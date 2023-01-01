import type { FormText } from 'components/form';

const doesBodyWrapAt72 = (body: string[]) => {
    return body.every(line => {
        return line.length <= 72;
    });
};

const doesBodyEndInPeriod = (body: string[]) => {
    const lastLineOfBody = body.at(-1);

    if (lastLineOfBody) {
        return lastLineOfBody.endsWith('.');
    }

    return false;
};

export const checkBody = (userInput: FormText) => {
    const [ /* title */, /* blank line */, ...body ] = userInput.split('\n');

    return body ? (
        doesBodyWrapAt72(body)
        && doesBodyEndInPeriod(body)
    ) : false;
};