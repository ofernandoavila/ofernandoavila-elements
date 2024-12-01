interface IFormForgotPasswordFormProps {
    title?: string;
    bordered?: boolean;
    message?: string;
    options?: {
        backToSignIn?: () => void;
    };
    onSubmitForm: (form: any) => void;
}