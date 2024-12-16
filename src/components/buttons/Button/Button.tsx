import { useEffect } from 'react';

import '../../../scss/style.scss';
import { Loading } from '../../Loading/Loading';
import { IButtonProps } from '../types';

export function Button({ 
    label, 
    onClick,
    color,
    children,
    isLoading
}: IButtonProps) {
    
    useEffect(() => {
        console.log(color?.toString());
    }, [color]);

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