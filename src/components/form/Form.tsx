import { useContext } from 'react';

import type { FormClasses, LabelText, FormText, UpdateFormText } from './formTypes';
import { themeContext } from 'providers/theme-provider';

import styles from './Form.module.scss';

interface Props {
    styleClasses?: FormClasses;
    labelText?: LabelText;
    formText: FormText;
    updateFormText: UpdateFormText;
}

export const Form = ({ styleClasses, labelText, formText, updateFormText }: Props) => {
    const { isDarkTheme } = useContext(themeContext);

    // Extracted for readability
    const layout = styleClasses?.layoutClass || styles.formLayoutDefaults;

    return (
        <label className={layout}>
            {labelText}

            <textarea
                className={`
                    ${styles.formDefaults}
                    ${isDarkTheme() ? styles.formDefaultsDark : ''}
                    ${styleClasses?.textFieldClass}
                `}
                value={formText}
                onChange={event => updateFormText(event.target.value)}
            />
        </label>
    );
};