import { useEffect, useState } from 'react';
import { EmailProps } from '../types';

import '../../../scss/style.scss';

export function Email({
    label,
    placeholder,
    onValidate,
    setValue,
    value,
    onErrorMessage,
    onSuccessMessage
}: EmailProps) {
    const [valid, setValid] = useState<boolean | null>(null);

    useEffect(() => {
        if(onValidate) {
            setValid(onValidate(value));
        }
    }, [
        value, 
        valid
    ]);

    return (
        <div className="form-group">
            { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
            <input 
                type="email"
                className={`form-control ${ valid !== null ? valid ? 'is-valid' : 'is-invalid' : '' }`} 
                placeholder={ placeholder } 
                value={value}
                onChange={ setValue }
            />
            { valid !== null ? 
                valid ? onSuccessMessage ? <div className="valid-feedback">{ onSuccessMessage() }</div> : ''
                        : onErrorMessage ? <div className="invalid-feedback">{ onErrorMessage() }</div> : ''
            : ''}
        </div>
    );
}