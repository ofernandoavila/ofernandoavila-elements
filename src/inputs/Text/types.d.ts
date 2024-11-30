import { InputHTMLAttributes } from "react";

type InputTextValidationStatus = 'valid' | 'invalid';

interface IInputTextValidation {
    status: InputTextValidationStatus;
    message?: string;
}

interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    validation?: IInputTextValidation;
}