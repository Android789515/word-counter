import { useState } from 'react';

import { FormText, Form } from 'components/form';

import styles from './TextEnter.module.scss';

export const TextEnter = () => {
    const [ formText, updateFormText ] = useState<FormText>('');

    return (
        <Form
            styleClasses={{
                layoutClass: styles.textEnterLayout,
                textFieldClass: styles.textEnterForm
            }}
            labelText={'Enter Text Here: '}
            formText={formText}
            updateFormText={updateFormText}
        />
    );
};