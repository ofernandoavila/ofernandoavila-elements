import { useState } from "react";
import { Text } from "../../inputs/Text/Text";
import { IInputValidation, InputValidationStatus } from "../../inputs/types";
import { CreatePasswordValidation } from "../../custom/CreatePasswordValidation/CreatePasswordValidation";
import { Password } from "../../inputs/Password/Password";
import { IFormResetCodeFormProps, IFormResetPasswordEndFormProps, IFormResetPasswordFormProps } from "./types";
import { formValidation, IValidation, ValidateForm } from "../../../validations/forms/FormValidation";

import '../../../scss/style.scss';
import { Button } from "../../buttons/Button/Button";
import { PasswordValidation } from "../../../validations/inputs/Password/PasswordValidation";

export function ResetPasswordForm({
    title,
    bordered,
    onSubmitForm,
    options
}: IFormResetPasswordFormProps) {
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    
    const [confirmPassword, setConfirmPassword] = useState('');

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
            { title ? <h4 className="title"> { title }</h4> : '' }
            <Password 
                label="Password"
                value={ password } 
                setValue={ setPassword }
                onErrorMessage={ () => "Password is invalid!" }
                onSuccessMessage={ () => "Password is valid!" }
                placeholder="Insert your password here"
                onValidate={ (password: string) => PasswordValidation.completeValidation(password, options?.passwordValidation?.minimumChars!) }
            />
            <CreatePasswordValidation
                setValidation={ setIsPasswordValid }
                password={ password }
                minimumChars={options?.passwordValidation?.minimumChars}
                hasNumber={options?.passwordValidation?.hasNumber}
                hasUpperCase={options?.passwordValidation?.hasUpperCase}
                hasSpecialChar={options?.passwordValidation?.hasSpecialChar}
            />
            <Password 
                value={confirmPassword} 
                setValue={ setConfirmPassword }
                label="Confirm password"
                placeholder="Insert your password again here"
                onErrorMessage={ () => "Confirm password is invalid!" }
                onSuccessMessage={ () => "Confirm password is valid!" }
                onValidate={ (confirmPassword: string) => PasswordValidation.matchPassword(password, confirmPassword) }
            />
            <Button label="Save password" color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}

export function ResetPasswordEndForm({
    title,
    bordered,
    message,
    isOperationValid
}: IFormResetPasswordEndFormProps) {

    const [status, setStatus] = useState<InputValidationStatus>(isOperationValid);

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
            { title ? <h4 className="title"> { title }</h4> : '' }

            <div className="operation-result">
                { status === "valid" ? (
                    <div className="icon success">
                        <i className="fa fa-check-circle"></i>
                    </div>
                ) : (
                    <div className="icon danger">
                        <i className="fa fa-times-circle"></i>
                    </div>
                ) }
                <span className="message">{ message }</span>
            </div>
            <Button label="Go to sign in" >Go to Sign In <i className="fa fa-arrow-right"></i></Button>
        </form>
    );
}