import { IInputProps } from '../types';
import './_checkbox.scss';

export function Checkbox({
    label,
    placeholder,
    validation,
    id,
    name
}: IInputProps) {
    return (
        <div className="form-check">
            <input type="checkbox" className={`form-check-input ${ validation ? 'is-' + validation.status : '' }`} name={name} id={ id } />
            { label ? <label className="form-check-label" htmlFor={ id }>{ label }</label> : '' }
            { validation?.status == 'invalid' && validation?.message ? (
                <div className="invalid-feedback">{ validation.message }</div>
            ): '' }
            { validation?.status == 'valid' && validation?.message ? (
                <div className="valid-feedback">{ validation.message }</div>
            ): '' }
        </div>
    );
}