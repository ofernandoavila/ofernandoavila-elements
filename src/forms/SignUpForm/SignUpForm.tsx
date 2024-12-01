import { useEffect, useState } from "react";
import { Button } from "../../buttons/Button/Button";
import { CreatePasswordValidation } from "../../custom/CreatePasswordValidation/CreatePasswordValidation";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";
import { Password } from "../../inputs/Password/Password";
import { Text } from "../../inputs/Text/Text";
import './_signup-form.scss';
import { IInputValidation } from "../../inputs/types";

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
            validations.username();
        }
        
        if(email.length > 4) {
            validations.email();
        }

        if(password.length > 4) {
            validations.password();
        }
    }, [username, email]);

    const validations = {
        username: () => {
            if(options?.usernameMinLength) {
                if(username.length < options.usernameMinLength) {
                    setUsernameValidation({
                        status: "invalid",
                        message: "The username must have at least " + options.usernameMinLength + " characters"
                    });
                    return false;
                } else {
                    setUsernameValidation({
                        status: 'valid'
                    });
                    return true;
                }
            } else {
                if(username.length < 3) {
                    setUsernameValidation({
                        status: "invalid",
                        message: "The username must have at least 3 characters"
                    });
                    return false;
                } else {
                    setUsernameValidation({
                        status: 'valid'
                    });
                    return true;
                }
            }
        },
        email: () => {
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) || email === "") {
                setEmailValidation({
                    status: "invalid",
                    message: "Invalid e-mail"
                });
                return false;
            } else {
                setEmailValidation({
                    status: "valid"
                });
                return true;
            }
        },
        password: () => {
            if(!isPasswordValid) {
                setPasswordValidation({
                    status: "invalid",
                    message: "Password invalid!"
                });
                return false;
            } else {
                setPasswordValidation({
                    status: "valid"
                });
                return true;
            }
        },

        confirmPassword: () => {
            if(password !== confirmPassword || password === "" && confirmPassword === "") {
                setConfirmPasswordValidation({
                    status: "invalid",
                    message: "The passwords must match!"
                });

                return false;
            } else {
                setConfirmPasswordValidation({
                    status: "valid"
                });
                return true;
            }
        },

        terms: () => {
            if(!terms) {
                setTermsValidation({
                    status: "invalid",
                    message: "You must accept the terms to create an account!"
                });
                return false;
            } else {
                setTermsValidation(undefined);
                return true;
            }
        }
    };

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        const results = [];

        results.push(validations.username());
        results.push(validations.email());
        results.push(validations.password());
        results.push(validations.confirmPassword());
        results.push(validations.terms());

        return results.filter(x => x === false).length === 0 ? onSubmitForm({ username, email, password, terms }) : false;
    }

    return (
        <form className={`signup-form ${ bordered ? 'signup-form-bordered' : '' }`}>
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