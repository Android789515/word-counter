import { FormText, UpdateFormText, Form } from 'components/form';

import styles from './TextEnter.module.scss';

interface Props {
    userInput: FormText;
    updateUserInput: UpdateFormText;
}

export const TextEnter = ({ userInput, updateUserInput }: Props) => {
    return (
        <Form
            styleClasses={{
                layoutClass: styles.textEnterLayout,
                textFieldClass: styles.textEnterForm
            }}
            labelText={'Enter Text Here:'}
            formText={userInput}
            updateFormText={updateUserInput}
        />
    );
};