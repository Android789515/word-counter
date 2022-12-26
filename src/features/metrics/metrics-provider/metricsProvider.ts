import type { FormText } from 'components/form';
import type { MetricsData } from '../metricTypes';
import { String } from 'utils/primitives';

export const getMetrics = (userInput: FormText): MetricsData => {
    const paragraphs = userInput.split('\n');

    type Paragraph = string;
    const measure = (splitter: (paragraph: Paragraph) => string | string[]) => {
        return paragraphs.reduce((total, paragraph) => {

            return total + splitter(paragraph).length;
        }, 0);
    };

    const sentences = measure(paragraph => paragraph.split('.').filter(String.isNotEmpty));

    const words = measure(paragraph => paragraph.split(' '));

    const letters = measure(paragraph => paragraph);

    return {
        paragraphs: paragraphs.length,
        sentences,
        words,
        letters
    };
};