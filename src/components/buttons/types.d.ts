export type ButtonColorType = 'primary' | 'secondary' | 'third' | 'default' | 'success' | 'danger' | 'warning' | 'nav';

export interface IButtonProps {
    color?: ButtonColorType;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    isLoading?: boolean;
}

export interface IPostNavigationButtonProps {
    type: IPostNavigationButtonType;
    postTitle: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type IPostNavigationButtonType = 'previous' | 'next';