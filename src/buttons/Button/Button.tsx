import { ReactNode, useEffect } from 'react';
import { Loading } from '../../elements/Loading/Loading';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/style.scss';
import './_button.scss';

type ButtonColorType = 'primary' | 'secondary' | 'third' | 'default' | 'success' | 'danger' | 'warning';

export interface IButtonProps {
    color?: ButtonColorType;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    isLoading?: boolean;
}

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