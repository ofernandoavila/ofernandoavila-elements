import { Button } from "../../buttons/Button/Button";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";
import { Password } from "../../inputs/Password/Password";
import { Text } from "../../inputs/Text/Text";
import './_login-form.scss';



export function LoginForm({
    title,
    bordered,
    rememberPasswordOption = true
}: IFormLoginFormProps) {


    return (
        <form className={`login-form ${ bordered ? 'login-form-bordered' : '' }`} action="">
            { title ? <h4 className="title"> { title }</h4> : '' }
            <Text label="Username" placeholder="Insert your username here" />
            <Password label="Password" placeholder="Insert your password here" />
            { rememberPasswordOption ? <Checkbox label="Remember password?" id="remember-password" name="remember-password" /> : '' }
            <Button label="Login" color="primary" />
        </form>
    );
}