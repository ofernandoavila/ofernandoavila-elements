import { Loading } from '../../Loading/Loading';
import { IButtonProps } from '../types';

import '../../../scss/style.scss';

export function Button({ 
    label, 
    onClick,
    color,
    children,
    isLoading
}: IButtonProps) {

    if(children) {
        return (
            <button 
                className={`btn ${color ? 'btn-' + color.toString() : ''}` } 
                onClick={ onClick }
            >{ children }</button>
        );
    }

    if(isLoading) {
        return (
            <button 
                className={`btn ${color ? 'btn-' + color.toString() : ''}` } 
                onClick={ onClick }
                disabled
            >{ label }<Loading /></button>
        );
    }

    return (
        <button 
            className={`btn ${color ? 'btn-' + color.toString() : ''}` } 
            onClick={ onClick }
        >{ label }</button>
    );
}