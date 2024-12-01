import { InputHTMLAttributes } from "react";

type InputValidationStatus = 'valid' | 'invalid';

interface IInputValidation {
    status: InputValidationStatus;
    message?: string;
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    validation?: IInputValidation;
}