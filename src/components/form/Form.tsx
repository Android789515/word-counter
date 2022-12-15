import type { LabelText, FormText, updateFormText } from './formTypes';

interface Props {
    labelText?: LabelText;
    formText: FormText;
    updateFormText: updateFormText;
}

const Form = ({ labelText, formText, updateFormText }: Props) => {
    return (
        <label>
            {labelText}

            <textarea
                value={formText}
                onChange={event => updateFormText(event.target.value)}
            />
        </label>
    );
};

export default Form;