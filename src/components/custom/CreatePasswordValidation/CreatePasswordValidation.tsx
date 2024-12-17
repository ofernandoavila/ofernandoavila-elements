import { useEffect, useState } from 'react';
import { ICreatePasswordValidationProps, ICreatePasswordValidationItemProps } from './types';

import '../../../scss/style.scss';
import { PasswordValidation } from '../../../validations/inputs/Password/PasswordValidation';

export function CreatePasswordValidation({
    password,
    hasNumber,
    hasSpecialChar,
    hasUpperCase,
    minimumChars,
    setValidation
}: ICreatePasswordValidationProps) {
    useEffect(() => {
        HandleIsPasswordValid(password);
    }, [password]);

    function HandleIsPasswordValid(password: string) {
        let results: boolean[] = [];

        if(minimumChars) results.push(PasswordValidation.minimumChars(password, minimumChars));
        if(hasNumber) results.push(PasswordValidation.hasNumber(password));
        if(hasUpperCase) results.push(PasswordValidation.hasUpperCase(password));
        if(hasSpecialChar) results.push(PasswordValidation.hasSpecialChar(password));

        setValidation(!(results.filter( x => x === false).length > 0));
    }

    return (
        <div className="create-password-validation">
            <ul className="list-group">
                { minimumChars ? <CreatePasswordValidationItem label={`Minimun ${minimumChars} characters`} password={password} onValidate={ (password) => PasswordValidation.minimumChars(password, minimumChars) } /> : '' }
                { hasNumber ? <CreatePasswordValidationItem label='At least 1 number' password={password} onValidate={ PasswordValidation.hasNumber } /> : '' }
                { hasUpperCase ? <CreatePasswordValidationItem label='At least 1 uppercase letter' password={password} onValidate={ PasswordValidation.hasUpperCase } /> : '' }
                { hasSpecialChar ? <CreatePasswordValidationItem label='At least 1 special character [ !@#$%^&* ]' password={password} onValidate={ PasswordValidation.hasSpecialChar } /> : '' }
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