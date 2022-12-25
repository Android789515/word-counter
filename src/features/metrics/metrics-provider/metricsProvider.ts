import type { FormText } from 'components/form';
import { String } from 'utils/primitives';

interface UserInputMetrics {
    paragraphs: number;
    sentences: number;
    words: number;
    letters: number;
}

export const getMetrics = (userInput: FormText): UserInputMetrics => {
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