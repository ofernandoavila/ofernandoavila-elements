import { useEffect, useState } from "react";
import { CreatePasswordValidation } from "../../custom/CreatePasswordValidation/CreatePasswordValidation";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";
import { Password } from "../../inputs/Password/Password";
import { Text } from "../../inputs/Text/Text";
import { IInputValidation } from "../../inputs/types";
import { formValidation, IValidation, ValidateForm } from "../../../validations/forms/FormValidation";

import '../../../scss/style.scss';
import { Button } from "../../buttons/Button/Button";

export function SignUpForm({
    title,
    bordered,
    options,
    onSubmitForm
}: IFormSignUpFormProps) {
    const [username, setUsername] = useState('');
    const [usernameValidation, setUsernameValidation] = useState<IInputValidation | undefined>(undefined);
    
    const [email, setEmail] = useState('');
    const [emailValidation, setEmailValidation] = useState<IInputValidation | undefined>(undefined);

    const [terms, setTerms] = useState(false);
    const [termsValidation, setTermsValidation] = useState<IInputValidation | undefined>(undefined);

    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState<IInputValidation | undefined>(undefined);
    
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState<IInputValidation | undefined>(undefined);

    useEffect(() => {
        if(username.length > 4 && usernameValidation === undefined) {
            formValidation.username(username, setUsernameValidation);
        }
        
        if(email.length > 4) {
            formValidation.email(email, setEmailValidation);
        }

        if(password.length > 4) {
            formValidation.password(isPasswordValid, setPasswordValidation);
        }
    }, [username, email]);

    const validations: IValidation[] = [
        { validator: () => formValidation.username(username, setUsernameValidation) },
        { validator: () => formValidation.email(email, setEmailValidation) },
        { validator: () => formValidation.password(isPasswordValid, setPasswordValidation) },
        { validator: () => formValidation.confirmPassword(password, confirmPassword, setConfirmPasswordValidation) },
        { validator: () => formValidation.terms(terms, setTermsValidation) },
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
            <div className="row">
                <div className="col">
                    <Text label="Username" value={username} validation={usernameValidation} onChange={e => setUsername(e.currentTarget.value)}  placeholder="Insert your username here" />
                </div>
                <div className="col">
                    <Text label="E-mail" value={email} validation={emailValidation} onChange={e => setEmail(e.currentTarget.value)}  placeholder="Insert your e-mail here" />
                </div>
            </div>
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
            <Checkbox checked={terms} validation={termsValidation} onChange={e => setTerms(!terms)} label="Do you agree with the Terms & Conditions?" id="conditions-agree" />
            <Button label="Create account" color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}