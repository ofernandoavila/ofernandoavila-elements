import { InputHTMLAttributes } from "react";

export type InputValidationStatus = 'valid' | 'invalid';

interface IInputValidation {
    status: InputValidationStatus;
    message?: string;
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    validation?: IInputValidation;
}

interface IFormForgotPasswordFormProps {
    title?: string;
    bordered?: boolean;
    message?: string;
    options?: {
        backToSignIn?: () => void;
    };
    onSubmitForm: (form: any) => void;
}