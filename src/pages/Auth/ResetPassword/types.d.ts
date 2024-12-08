import { IFormResetCodeFormProps, IFormResetPasswordEndFormProps, IFormResetPasswordFormProps } from "../../../extra/forms/ResetPasswordForm/types";

interface IPageResetPasswordProps {
    resetCodeForm?: IFormResetCodeFormProps;
    resetPasswordForm?: IFormResetPasswordFormProps;
    resetPasswordEndForm?: IFormResetPasswordEndFormProps;
}