import { screen, render } from '@testing-library/react';

import type { Info } from 'components/info-group';
import { String } from 'utils/primitives';

import { Metrics } from './Metrics';

const metrics: Info[] = [
    { description: 'Width', value: '9cm' },
    { description: 'Height', value: '12cm' },
    { description: 'Length', value: '10cm' },
    { description: 'Shape', value: 'Rectangular Prism' }
];

describe('Metrics', () => {
    it('Displays the correct amount of metric info passed to it', () => {
        render(
            <Metrics
                metrics={metrics}
            />
        );

        const MetricElements = screen.getAllByRole('listitem');

        expect(MetricElements).toHaveLength(4);
    });

    it('Displays the correct information for each piece of info passed to it', () => {
        render(
            <Metrics
                metrics={metrics}
            />
        );

        const MetricElements = screen.getAllByRole('listitem');

        const renderedInfo = MetricElements.map(element => {
            const [ description, value ] = element.textContent!.split(':').map(String.trim);
            return { description, value };
        });

        expect(renderedInfo).toEqual(metrics);
    });
});