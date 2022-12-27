import type { FormText } from 'components/form';
import type { MetricsData } from '../metricTypes';
import { String } from 'utils/primitives';

type Paragraph = string;
type Splitter = (paragraph: Paragraph) => Paragraph[] | Paragraph;

const measure = (paragraphs: Paragraph[]) => (splitter: Splitter) => {
    return paragraphs.reduce((total, paragraph) => {

        return total + splitter(paragraph).length;
    }, 0);
};

export const getMetrics = (userInput: FormText): MetricsData => {
    const paragraphs = userInput.split('\n').filter(String.isNotEmpty);

    const measureParagraph = measure(paragraphs);

    const sentences = measureParagraph(paragraph => {
        return paragraph.split('.').filter(String.isNotEmpty);
    });

    const words = measureParagraph(paragraph => {
        return paragraph.split(' ').filter(String.isNotEmpty);
    });

    const letters = measureParagraph(paragraph => paragraph);

    return {
        paragraphs: paragraphs.length,
        sentences,
        words,
        letters
    };
};