import { BasicInput } from '../BasicInput/BasicInput';
import { PasswordInputProps } from '../types';

import '../../../scss/style.scss';

export function Password(props: PasswordInputProps) {
    return (
        <BasicInput
            type='password'
            {...props}
        />
    );
}