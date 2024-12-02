import { InputValidationStatus } from "../../inputs/types";

interface IFormResetPasswordFormProps extends IFormProps {
    options?: {
        resetCodeOptions?: IFormResetCodeFormProps;
        passwordValidation?: IFormPasswordCreationValidation;
    };
}

interface IFormResetCodeFormProps extends IFormProps {
}

interface IFormResetPasswordEndFormProps extends IFormProps {
    isOperationValid: InputValidationStatus;
}