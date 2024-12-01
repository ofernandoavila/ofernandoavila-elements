import './_text.scss';
import { IInputProps } from '../types';

export function Text({
    label,
    placeholder,
    validation,
    value,
    onChange
}: IInputProps) {
    return (
        <div className="form-group">
            { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
            <input 
                type="text"
                className={`form-control ${ validation ? 'is-' + validation.status : '' }`} 
                placeholder={ placeholder } 
                value={value}
                onChange={onChange}
            />
            { validation?.status == 'invalid' && validation?.message ? (
                <div className="invalid-feedback">{ validation.message }</div>
            ): '' }
            { validation?.status == 'valid' && validation?.message ? (
                <div className="valid-feedback">{ validation.message }</div>
            ): '' }
        </div>
    );
}