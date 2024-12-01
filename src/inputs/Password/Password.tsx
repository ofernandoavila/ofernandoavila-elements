import { IInputProps } from '../types';
import './_password.scss';

export function Password({
    label,
    placeholder,
    validation
}: IInputProps) {
    return (
        <div className="form-group">
            { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
            <input 
                type="password"
                className={`form-control ${ validation ? 'is-' + validation.status : '' }`} 
                placeholder={ placeholder } 
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