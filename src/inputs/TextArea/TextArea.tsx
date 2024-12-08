import { IInputProps } from '../types';

import '../../scss/style.scss';

export function TextArea({
    label,
    placeholder,
    validation,
    name,
    id
}: IInputProps) {
    return (
        <div className="form-group">
            { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
            <textarea placeholder={ placeholder } className={`form-control ${ validation ? 'is-' + validation.status : '' }`} name={name}  id={id}></textarea>
            { validation?.status == 'invalid' && validation?.message ? (
                <div className="invalid-feedback">{ validation.message }</div>
            ): '' }
            { validation?.status == 'valid' && validation?.message ? (
                <div className="valid-feedback">{ validation.message }</div>
            ): '' }
        </div>
    );
}