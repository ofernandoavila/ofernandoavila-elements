import { useState } from "react";
import { InputValidationStatus, OnValidateInputState } from "../../inputs/types";
import { CreatePasswordValidation } from "../../custom/CreatePasswordValidation/CreatePasswordValidation";
import { Password } from "../../inputs/Password/Password";
import { IFormResetPasswordEndFormProps, IFormResetPasswordFormProps } from "./types";
import { Button } from "../../buttons/Button/Button";
import { PasswordValidation } from "../../../validations/inputs/Password/PasswordValidation";

import '../../../scss/style.scss';

export function ResetPasswordForm({
    title,
    bordered,
    onSubmitForm,
    options
}: IFormResetPasswordFormProps) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const HandleValidatePassword = (value: string) => PasswordValidation.completeValidation(value, options?.passwordValidation?.minimumChars!);
    const HandleValidateConfirmPassword = (value: string) => PasswordValidation.matchPassword(password, value);

    const [states, setStates] = useState<{ 
        password: OnValidateInputState; 
        confirmPassword: OnValidateInputState;
    } | undefined>(undefined);

    async function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        let errors: boolean[] = [];

        setStates({
            password: HandleValidatePassword(password) ? 'valid' : 'invalid',
            confirmPassword: HandleValidateConfirmPassword(confirmPassword) ? 'valid' : 'invalid'
        });

        errors.push(HandleValidatePassword(password));
        errors.push(HandleValidateConfirmPassword(confirmPassword));

        if(errors.filter( x => x === false).length === 0) {
            if(onSubmitForm) {
                await onSubmitForm({ password });
            }
        }
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
                onValidate={ HandleValidatePassword }
                state={ states?.password }
            />
            <CreatePasswordValidation
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
                onValidate={ HandleValidateConfirmPassword }
                state={ states?.confirmPassword }
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

    const [status] = useState<InputValidationStatus>(isOperationValid);

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