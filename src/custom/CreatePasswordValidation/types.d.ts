import { SetStateAction } from "react";

interface ICreatePasswordValidationProps {
    password: string;
    minimumChars?: number;
    hasNumber?: boolean;
    hasUpperCase?: boolean;
    hasSpecialChar?: boolean;
    setValidation: React.Dispatch<SetStateAction<boolean>>;
}

interface ICreatePasswordValidationItemProps {
    label: string;
    password: string;
    onValidate: (password: string) => boolean;
}