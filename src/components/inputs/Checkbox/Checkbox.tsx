import { BasicInput } from '../BasicInput/BasicInput';
import { CheckboxInputProps } from '../types';

import '../../../scss/style.scss';

export function Checkbox(props: CheckboxInputProps) {
    return (
        <BasicInput
            type='checkbox'
            {...props}
        />
    );
}