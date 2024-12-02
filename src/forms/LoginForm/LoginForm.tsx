import { useState } from "react";
import { Button } from "../../buttons/Button/Button";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";
import { Password } from "../../inputs/Password/Password";
import { Text } from "../../inputs/Text/Text";
import { IInputValidation } from "../../inputs/types";

import './_login-form.scss';

export function LoginForm({
    title,
    bordered,
    rememberPasswordOption = true,
    onSubmitForm
}: IFormLoginFormProps) {
    const [username, setUsername] = useState('');
    const [usernameValidation, setUsernameValidation] = useState<IInputValidation | undefined>(undefined);

    const [password, setPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState<IInputValidation | undefined>(undefined);

    const [isLoading, setIsLoading] = useState(false);

    async function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        
        setIsLoading(true);
        const errors = [];

        if(username === '') {
            errors.push(false);
            setUsernameValidation({
                status:"invalid",
                message: 'This field cannot be empty'
            });
        } else {
            setUsernameValidation({
                status: "valid",
            });
        }
        
        if(password === '') {
            errors.push(false);
            setPasswordValidation({
                status:"invalid",
                message: 'This field cannot be empty'
            });
        } else {
            setPasswordValidation({
                status: "valid",
            });
        }

        if(errors.filter( x => x === false).length === 0) {
            if(onSubmitForm) {
                await onSubmitForm({ username, password });
            }
        }
        
        setIsLoading(false);
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`} action="">
            { title ? <h4 className="title"> { title }</h4> : '' }
            <Text label="Username" validation={usernameValidation} onChange={e => setUsername(e.target.value) } placeholder="Insert your username here" />
            <Password label="Password" validation={passwordValidation} onChange={e => setPassword(e.target.value) } placeholder="Insert your password here" />
            { rememberPasswordOption ? <Checkbox label="Remember password?" id="remember-password" name="remember-password" /> : '' }
            <Button label="Login" color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}