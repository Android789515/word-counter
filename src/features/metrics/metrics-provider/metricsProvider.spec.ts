import { renderHook } from '@testing-library/react';

import { getMetrics } from './metricsProvider';

const fakeUserInput = () => {
    return (
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
    'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
    'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate' +
    ' velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat' +
    ' cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id' +
    ' est laborum.'
        + '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
    'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
    'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate' +
    ' velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat' +
    ' cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id' +
    ' est laborum.'
    );
};

describe('metricsProvider', () => {
    it('Provides an accurate metric measuring the number of paragraphs in the user input', () => {
        const { result } = renderHook(() => getMetrics(fakeUserInput()));
        const { paragraphs } = result.current;

        expect(paragraphs).toEqual(2);
    });

    it('Provides an accurate metric measuring the number of sentences in the user input', () => {
        const { result } = renderHook(() => getMetrics(fakeUserInput()));
        const { sentences } = result.current;

        expect(sentences).toEqual(8);
    });

    it('Provides an accurate metric measuring the number of words in the user input', () => {
        const { result } = renderHook(() => getMetrics(fakeUserInput()));
        const { words } = result.current;

        expect(words).toEqual(138);
    });

    it('Provides an accurate metric measuring the number of letters in the user input', () => {
        const { result } = renderHook(() => getMetrics(fakeUserInput()));
        const { letters } = result.current;

        expect(letters).toEqual(890);
    });
});