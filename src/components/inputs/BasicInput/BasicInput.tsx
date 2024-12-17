import { ChangeEvent, useEffect, useState } from 'react';
import { BasicInputProps } from '../types';

import '../../../scss/style.scss';

export function BasicInput<T>({
    label,
    placeholder,
    onValidate,
    setValue,
    value,
    onErrorMessage,
    onSuccessMessage,
    type,
    id,
    name
}: BasicInputProps<T>) {
    const [valid, setValid] = useState<boolean | null>(null);

    useEffect(() => {
        HandleChange()
    }, []);

    function HandleChange(e?: ChangeEvent<HTMLInputElement>) {
        e?.preventDefault();

        if(onValidate) {
            setValid(onValidate(e?.currentTarget.value as T));
        }

        if(setValue) {
            setValue(e?.currentTarget.value as T );
        }
    }

    if(type === 'textarea') {
        return (
            <div className="form-group">
                { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
                <textarea 
                    placeholder={ placeholder } 
                    className={`form-control ${ valid !== null ? valid ? 'is-valid' : 'is-invalid' : '' }`}
                    name={name}
                    id={id}
                ></textarea>
                { valid !== null ? 
                    valid ? onSuccessMessage ? <div className="valid-feedback">{ onSuccessMessage() }</div> : ''
                            : onErrorMessage ? <div className="invalid-feedback">{ onErrorMessage() }</div> : ''
                : ''}
            </div>
        );
    }

    if(type === 'checkbox') {
        return (
            <div className="form-check">
                <input 
                    type="checkbox" 
                    onChange={HandleChange} 
                    className={`form-check-input ${ valid !== null ? valid ? 'is-valid' : 'is-invalid' : '' }`} 
                    name={name} 
                    id={ id } 
                    checked={ value as boolean } 
                />
                { label ? <label className="form-check-label" htmlFor={ id }>{ label }</label> : '' }
                { valid !== null ? 
                    valid ? onSuccessMessage ? <div className="valid-feedback">{ onSuccessMessage() }</div> : ''
                            : onErrorMessage ? <div className="invalid-feedback">{ onErrorMessage() }</div> : ''
                : ''}
            </div>
        );
    }

    return (
        <div className="form-group">
            { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
            <input 
                type={type}
                className={`form-control ${ valid !== null ? valid ? 'is-valid' : 'is-invalid' : '' }`} 
                placeholder={ placeholder } 
                value={value as string}
                onChange={ HandleChange }
            />
            { valid !== null ? 
                valid ? onSuccessMessage ? <div className="valid-feedback">{ onSuccessMessage() }</div> : ''
                        : onErrorMessage ? <div className="invalid-feedback">{ onErrorMessage() }</div> : ''
            : ''}
        </div>
    );
}