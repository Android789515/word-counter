import type { FormClasses, LabelText, FormText, updateFormText } from './formTypes';

import styles from './Form.module.scss';

interface Props {
    styleClasses?: FormClasses;
    labelText?: LabelText;
    formText: FormText;
    updateFormText: updateFormText;
}

const Form = ({ styleClasses, labelText, formText, updateFormText }: Props) => {
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

export default Form;