import type { FormText } from 'components/form';
import { MessageHeaderTypes } from '../gitCheckTypes';
import { Bool, Str } from 'utils/primitives';

const doesPassInitialChecks = (titleLine: string) => {
    const maxTitleLength = 50;

    return Object.values({
        isNotEmpty: Str.isNotEmpty(titleLine),
        hasNoPeriod: !titleLine.endsWith('.'),

        is50LettersOrFewer: titleLine.length <= maxTitleLength,
        startsWithLetter: /[a-zA-Z]/.test(titleLine.charAt(0))
    }).every(Bool.doesPass);
};

const doesPassBasicChecks = (titleLine: string) => {
    return Object.values({
        isCapitalized: Str.isCapitalized(titleLine),
    }).every(Bool.doesPass);
};

const doesPassConventionChecks = (titleLine: string) => {
    return Object.values(MessageHeaderTypes).some(type => {
        const hasValidHeaderType = titleLine.startsWith(type);

        if (hasValidHeaderType) {
            const [ , restOfTitle ] = titleLine.split(type);
            const [ scope, summary ] = restOfTitle.split(':').map(Str.trim);

            if (summary && doesPassInitialChecks(summary)) {
                // Removes the parenthesis if there is no scope
                const convention = `${scope}: ${summary}`.replace('()', '');

                return restOfTitle === convention;
            }
        }

        return false;
    });
};

export const checkTitle = (userInput: FormText) => {
    const titleLine = userInput.split('\n').at(0)!;

    if (doesPassInitialChecks(titleLine)) {
        return (
            doesPassBasicChecks(titleLine)
            || doesPassConventionChecks(titleLine)
        );
    }

    return false;
};