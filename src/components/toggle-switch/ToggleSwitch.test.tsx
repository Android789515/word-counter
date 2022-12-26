import { screen, render, waitFor } from '@testing-library/react';

import { ToggleSwitch } from './ToggleSwitch';

describe('ToggleSwitch', () => {
    it('Runs a function when it is toggled on', async () => {
        const toggleOnFunction = jest.fn(() => {});

        render(
            <ToggleSwitch
                whenToggledOn={toggleOnFunction}
                whenToggledOff={() => {}}
            />
        );

        const Component = screen.getByRole('button');

        await waitFor(() => {
            Component.click();
        });

        expect(toggleOnFunction).toHaveBeenCalled();
    });

    it('Runs a function when it is toggled off', async () => {
        const toggleOffFunction = jest.fn(() => {});

        render(
            <ToggleSwitch
                isInitiallyToggledOn
                whenToggledOn={() => {}}
                whenToggledOff={toggleOffFunction}
            />
        );

        const Component = screen.getByRole('button');

        await waitFor(() => {
            Component.click();
        });

        expect(toggleOffFunction).toHaveBeenCalled();
    });
});