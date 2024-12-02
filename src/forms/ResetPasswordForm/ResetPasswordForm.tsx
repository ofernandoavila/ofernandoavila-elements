import { useState } from "react";
import { Button } from "../../buttons/Button/Button";
import { Text } from "../../inputs/Text/Text";
import { IInputValidation, InputValidationStatus } from "../../inputs/types";
import { CreatePasswordValidation } from "../../custom/CreatePasswordValidation/CreatePasswordValidation";
import { Password } from "../../inputs/Password/Password";
import { IFormResetCodeFormProps, IFormResetPasswordEndFormProps, IFormResetPasswordFormProps } from "./types";
import { formValidation, IValidation, ValidateForm } from "../../validations/forms/FormValidation";

import './_reset-password-form.scss';

export function ResetPasswordForm({
    title,
    bordered,
    onSubmitForm = (x: any) => new Promise<void>(() => {}),
    options
}: IFormResetPasswordFormProps) {
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState<IInputValidation | undefined>(undefined);
    
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState<IInputValidation | undefined>(undefined);
    
    const validations: IValidation[] = [
        { validator: () => formValidation.password(isPasswordValid, setPasswordValidation) },
        { validator: () => formValidation.confirmPassword(password, confirmPassword, setConfirmPasswordValidation) }
    ];

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        if(ValidateForm(validations)) {
            return onSubmitForm({ password });
        }
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
            { title ? <h4 className="title"> { title }</h4> : '' }
            <Password label="Password" validation={passwordValidation} value={password} onChange={e => setPassword(e.currentTarget.value)} placeholder="Insert your password here" />
            <CreatePasswordValidation
                setValidation={ setIsPasswordValid }
                password={ password }
                minimumChars={options?.passwordValidation?.minimumChars}
                hasNumber={options?.passwordValidation?.hasNumber}
                hasUpperCase={options?.passwordValidation?.hasUpperCase}
                hasSpecialChar={options?.passwordValidation?.hasSpecialChar}
            />
            <Password value={confirmPassword} validation={confirmPasswordValidation} onChange={e => setConfirmPassword(e.currentTarget.value)} label="Confirm password" placeholder="Insert your password again here" />
            <Button label="Save password" color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}

export function ResetCodeForm({
    title,
    bordered,
    onSubmitForm = (x: any) => new Promise<void>(() => {}),
    message,
}: IFormResetCodeFormProps) {
    const [code, setCode] = useState<string>('');
    const [codeValidation, setCodeValidation] = useState<IInputValidation | undefined>(undefined);

    const validations: IValidation[] = [
        { validator: () => formValidation.code(code, setCodeValidation) }
    ];

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        if(ValidateForm(validations)) {
            return onSubmitForm({ code });
        }
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
            { title ? <h4 className="title"> { title }</h4> : '' }
            { message ? <p>{ message }</p> : '' }
            <Text label="Reset code" value={code} validation={codeValidation} onChange={e => setCode(e.currentTarget.value)}  placeholder="Insert the reset code here" />
            <Button label="Send reset link" color="primary" onClick={HandleOnSubmitForm}>Reset password <i className="fa fa-arrow-right"></i></Button>
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