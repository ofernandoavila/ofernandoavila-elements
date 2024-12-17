import { BasicInput } from '../BasicInput/BasicInput';
import { TextInputProps } from '../types';

import '../../../scss/style.scss';

export function Text(props: TextInputProps) {
    return (
        <BasicInput
            {...props}
            type='text'
        />
    );
}