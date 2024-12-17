import { useState } from "react";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";
import { Password } from "../../inputs/Password/Password";
import { Text } from "../../inputs/Text/Text";
import { Button } from "../../buttons/Button/Button";
import { BasicValidation } from "../../../validations/inputs/BasicValidation/BasicValidation";

import '../../../scss/style.scss';

export function LoginForm({
    title,
    bordered,
    rememberPasswordOption = true,
    onSubmitForm
}: IFormLoginFormProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const HandleValidateUsername = (value?: string) : boolean | null => BasicValidation.not_empty(value!);
    const HandleValidatePassword = (value?: string) : boolean => BasicValidation.not_empty(value!);

    async function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        
        setIsLoading(true);
        const errors = [];

        errors.push(HandleValidateUsername(username));
        errors.push(HandleValidatePassword(password));

        if(errors.filter( x => x === false).length === 0) {
            if(onSubmitForm) {
                await onSubmitForm({ username, password, rememberPassword });
                setIsLoading(false);
            }
        }
        
        setIsLoading(false);
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`} action="">
            { title ? <h4 className="title"> { title }</h4> : '' }
            <Text 
                label="Username" 
                placeholder="Insert your username here"
                value={username}
                setValue={setUsername}
                onErrorMessage={() => 'This field cannot be empty'}
                onValidate={HandleValidateUsername}
            />
            <Password 
                label="Password" 
                setValue={ setPassword } 
                placeholder="Insert your password here"
                onErrorMessage={() => 'This field cannot be empty'}
                onValidate={HandleValidatePassword}
            />
            { rememberPasswordOption ? 
                <Checkbox 
                    label="Remember password?" 
                    id="remember-password" 
                    name="remember-password"
                    value={rememberPassword}
                    setValue={ setRememberPassword }
                /> : '' 
            }
            <Button label="Login" isLoading={isLoading} color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}