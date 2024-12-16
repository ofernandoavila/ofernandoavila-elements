import { IFormResetCodeFormProps, IFormResetPasswordEndFormProps, IFormResetPasswordFormProps } from "../../../components/forms/ResetPasswordForm/types";

interface IPageResetPasswordProps {
    resetCodeForm?: IFormResetCodeFormProps;
    resetPasswordForm?: IFormResetPasswordFormProps;
    resetPasswordEndForm?: IFormResetPasswordEndFormProps;
}