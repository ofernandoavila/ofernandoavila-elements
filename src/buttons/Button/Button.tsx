import { useEffect } from 'react';
import './_button.scss';

type ButtonColorType = 'primary' | 'secondary' | 'default' | 'success' | 'danger' | 'warning';

export interface IButtonProps {
    color?: ButtonColorType;
    label: string;
    onClick?: () => void;
}

export function Button({ 
    label, 
    onClick,
    color
}: IButtonProps) {
    
    useEffect(() => {
        console.log(color?.toString());
    }, [color]);

    return (
        <button 
            className={`btn ${color ? 'btn-' + color.toString() : ''}` } 
            onClick={ onClick }
        >{ label }</button>
    );
}