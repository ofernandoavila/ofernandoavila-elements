import { BasicInput } from '../BasicInput/BasicInput';
import { EmailInputProps } from '../types';

import '../../../scss/style.scss';

export function Email(props: EmailInputProps) {
    return (
        <BasicInput
            {...props}
            type='text'
        />
    );
}