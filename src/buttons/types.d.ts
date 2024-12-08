type ButtonColorType = 'primary' | 'secondary' | 'third' | 'default' | 'success' | 'danger' | 'warning' | 'nav';

interface IButtonProps {
    color?: ButtonColorType;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    isLoading?: boolean;
}

interface IPostNavigationButtonProps {
    type: 'previous' | 'next';
    postTitle: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}