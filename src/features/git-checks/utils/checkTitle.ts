import type { FormText } from 'components/form';
import { regexMatchAny } from 'utils/regex';
import { Str } from 'utils/primitives';
import { GitHeaderTypes } from '../gitCheckTypes';
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
    const headerTypes = regexMatchAny(GitHeaderTypes).source;

    const scopeConvention = /\(.*[^A-Z()]\)/.source;
    const summaryConvention = /[^A-Z]{1,50}/.source;

    const convention = new RegExp(`^${headerTypes}${scopeConvention}: ${summaryConvention}$`);

    return convention.test(titleLine);
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
