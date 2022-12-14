import type { FormText, updateFormText } from './formTypes';

interface Props {
    formText: FormText;
    updateFormText: updateFormText;
}

const Form = ({ formText, updateFormText }: Props) => {
    return (
        <label>
            Enter text here:

            <textarea
                value={formText}
                onChange={event => updateFormText(event.target.value)}
            />
        </label>
    );
};

export default Form;