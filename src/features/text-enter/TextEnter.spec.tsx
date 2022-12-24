import { screen, render, fireEvent } from '@testing-library/react';

import type { FormText, UpdateFormText } from 'components/form';
import { TextEnter } from './TextEnter';

describe('TextEnter', () => {
    it('Updates the user input when its form field when the form is typed in', () => {

        let userInput: FormText = 'Nothing yet.';
        const updateUserInput: UpdateFormText =
            jest.fn((newUserInput) => userInput = newUserInput);

        render(
            <TextEnter
                userInput={userInput}
                updateUserInput={updateUserInput}
            />
        );

        const FormField = screen.getByRole('textbox');

        const whatUserTyped = 'I typed something.';
        fireEvent.change(FormField, { target: { value: whatUserTyped } });

        expect(updateUserInput).toHaveBeenCalledWith(whatUserTyped);
    });
});