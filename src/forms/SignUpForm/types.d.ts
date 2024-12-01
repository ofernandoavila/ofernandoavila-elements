interface IFormSignUpFormProps {
    title?: string;
    bordered?: boolean;
    options?: {
        usernameMinLength?: number;
        passwordValidation?: {
            hasNumber?: boolean;
            hasSpecialChar?: boolean;
            hasUpperCase?: boolean;
            minimumChars?: number;
        }
    };
    onSubmitForm: (form: any) => void;
}