import { useEffect, useState } from 'react';
import { BasicInputProps, OnValidateInputState } from '../types';

import '../../../scss/style.scss';

export function BasicInput<T>({
    label,
    placeholder,
    setValue,
    value,
    onErrorMessage,
    onSuccessMessage,
    type,
    id,
    name,
    state,
    onValidate
}: BasicInputProps<T>) {
    const [valid, setValid] = useState<boolean | null>(null);

    useEffect(() => {
        if(value && (value as string).length > 3) {
            HandleChange(value as string);
        }
    }, [value]);

    useEffect(() => {
        setValidation(state);
    }, [state]);

    const setValidation = (value?: OnValidateInputState) => {
        if(value) {
            switch(value) {
                case 'valid':
                    setValid(true);
                    break;
                case 'invalid':
                    setValid(false);
                    break;
                default:
                    setValid(null);
                    break;
            }
        }
    }

    const HandleChange = (e: string) => {
        setValidation(state);

        if(onValidate) {
            setValid(onValidate(e as T));
        }

        if(setValue) {
            switch(type) {
                case 'checkbox':
                    setValue(e === 'on' ? true as T : false as T);
                    break;
                
                default:
                    setValue(e as T);
                    break;
            }
        }
    }

    switch(type) {
        case 'textarea':
            return (
                <div className="form-group">
                    { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
                    <textarea 
                        placeholder={ placeholder } 
                        className={`form-control ${ valid !== null ? valid ? 'is-valid' : 'is-invalid' : '' }`}
                        name={name}
                        id={id}
                        onChange={ e => HandleChange(e.currentTarget.value) }
                    ></textarea>
                    { valid !== null ? 
                        valid ? onSuccessMessage ? <div className="valid-feedback">{ onSuccessMessage() }</div> : ''
                                : onErrorMessage ? <div className="invalid-feedback">{ onErrorMessage() }</div> : ''
                    : ''}
                </div>
            );
        
        case 'checkbox':
            return (
                <div className="form-check">
                    <input 
                        type="checkbox"
                        onChange={ e => HandleChange(e.currentTarget.checked ? 'on' : 'off') } 
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

        default:
            return (
                <div className="form-group">
                    { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
                    <input 
                        type={type}
                        className={`form-control ${ valid !== null ? valid ? 'is-valid' : 'is-invalid' : '' }`} 
                        placeholder={ placeholder } 
                        value={value as string}
                        onChange={  e => HandleChange(e.currentTarget.value)  }
                    />
                    { valid !== null ? 
                        valid ? onSuccessMessage ? <div className="valid-feedback">{ onSuccessMessage() }</div> : ''
                                : onErrorMessage ? <div className="invalid-feedback">{ onErrorMessage() }</div> : ''
                    : ''}
                </div>
            );
    }
}