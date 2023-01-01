import type { FormText } from 'components/form';
import { MessageHeaderTypes } from '../gitCheckTypes';
import { Str } from 'utils/primitives';

import { testCases } from './helpers';

const doesPassInitialChecks = (titleLine: string) => {
   const maxTitleLength = 50;

   return testCases({
      isNotEmpty: Str.isNotEmpty(titleLine),
      hasNoPeriod: !titleLine.endsWith('.'),

      is50LettersOrFewer: titleLine.length <= maxTitleLength,
      startsWithLetter: /[a-zA-Z]/.test(titleLine.charAt(0)),
   });
};

const doesPassBasicChecks = (titleLine: string) => {
   return testCases({
      isCapitalized: Str.isCapitalized(titleLine),
   });
};

const doesPassConventionChecks = (titleLine: string) => {
    return Object.values(MessageHeaderTypes).some(type => {
        const hasValidHeaderType = titleLine.startsWith(type);

        if (Str.isLowerCase(titleLine) && hasValidHeaderType) {
            const [ , restOfTitle ] = titleLine.split(type);
            const [ scope, summary ] = restOfTitle.split(':').map(Str.trim);

            if (summary) {
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
