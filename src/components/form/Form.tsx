import type { FormClasses, LabelText, FormText, UpdateFormText } from './formTypes';

import styles from './Form.module.scss';

interface Props {
    styleClasses?: FormClasses;
    labelText?: LabelText;
    formText: FormText;
    updateFormText: UpdateFormText;
}

export const Form = ({ styleClasses, labelText, formText, updateFormText }: Props) => {
    // Extracted for readability
    const layout = styleClasses?.layoutClass || styles.formLayoutDefaults;

    return (
        <label className={layout}>
            {labelText}

            <textarea
                className={`
                    ${styles.formDefaults}
                    ${styleClasses?.textFieldClass}
                `}
                value={formText}
                onChange={event => updateFormText(event.target.value)}
            />
        </label>
    );
};