import { screen, render, fireEvent } from '@testing-library/react';

import { TextEnter } from './TextEnter';

describe('TextEnter', () => {
    it('Displays a new value in its form field when the form is typed in', () => {
        const { rerender } = render(
            <TextEnter />
        );

        const FormField = screen.getByRole('textbox');

        const whatUserTyped = 'I typed something.';
        fireEvent.change(FormField, { target: { value: whatUserTyped } });

        rerender(
            <TextEnter />
        );

        const UpdatedFormField = screen.getByRole('textbox');
        expect(UpdatedFormField).toHaveValue(whatUserTyped);
    });
});