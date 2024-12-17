import { BasicInput } from '../BasicInput/BasicInput';
import { TextAreaInputProps } from '../types';

import '../../../scss/style.scss';

export function TextArea(props: TextAreaInputProps) {
    return (
        <BasicInput
            type='textarea'
            {...props}
        />
    );
}