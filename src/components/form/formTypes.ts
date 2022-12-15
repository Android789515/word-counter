import type { ClassName } from 'types';

export interface FormClasses {
    layoutClass?: ClassName;
    textFieldClass?: ClassName;
}

export type LabelText = string;
export type FormText = string;

type NewFormText = FormText;
export type updateFormText = (newFormText: NewFormText) => void; // Does state updates