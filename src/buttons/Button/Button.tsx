import { ReactNode, useEffect } from 'react';
import './_button.scss';

type ButtonColorType = 'primary' | 'secondary' | 'default' | 'success' | 'danger' | 'warning';

export interface IButtonProps {
    color?: ButtonColorType;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

export function Button({ 
    label, 
    onClick,
    color,
    children
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

    return (
        <button 
            className={`btn ${color ? 'btn-' + color.toString() : ''}` } 
            onClick={ onClick }
        >{ label }</button>
    );
}