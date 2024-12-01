import { useEffect, useState } from 'react';
import './_create-password-validation.scss';
import { ICreatePasswordValidationProps, ICreatePasswordValidationItemProps } from './types';

export function CreatePasswordValidation({
    password,
    hasNumber,
    hasSpecialChar,
    hasUpperCase,
    minimumChars,
    setValidation
}: ICreatePasswordValidationProps) {

    const validations = {
        minimumChars: (password: string, minimumChars: number) => password.length >= minimumChars,
        hasNumber: (password: string) => /\d/.test(password),
        hasUpperCase: (password: string) => /[A-Z]/.test(password),
        hasSpecialChar: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password)
    }

    useEffect(() => {
        HandleIsPasswordValid(password);
    }, [password]);

    function HandleIsPasswordValid(password: string) {
        let results: boolean[] = [];

        if(minimumChars) results.push(validations.minimumChars(password, minimumChars));
        if(hasNumber) results.push(validations.hasNumber(password));
        if(hasUpperCase) results.push(validations.hasUpperCase(password));
        if(hasSpecialChar) results.push(validations.hasSpecialChar(password));

        setValidation(!(results.filter( x => x === false).length > 0));
    }

    return (
        <div className="create-password-validation">
            <ul className="list-group">
                { minimumChars ? <CreatePasswordValidationItem label={`Minimun ${minimumChars} characters`} password={password} onValidate={ (password) => validations.minimumChars(password, minimumChars) } /> : '' }
                { hasNumber ? <CreatePasswordValidationItem label='At least 1 number' password={password} onValidate={ validations.hasNumber } /> : '' }
                { hasUpperCase ? <CreatePasswordValidationItem label='At least 1 uppercase letter' password={password} onValidate={ validations.hasUpperCase } /> : '' }
                { hasSpecialChar ? <CreatePasswordValidationItem label='At least 1 special character [ !@#$%^&* ]' password={password} onValidate={ validations.hasSpecialChar } /> : '' }
            </ul>
        </div>
    );
}



export function CreatePasswordValidationItem({
    label,
    password,
    onValidate,
}: ICreatePasswordValidationItemProps) {
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(onValidate(password));
    }, [password]);

    return (
        <li className={`list-group-item ${ isValid ? 'valid' : '' }`}><i className="fa fa-check"></i>{ label }</li>
    );
}