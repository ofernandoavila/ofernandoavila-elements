import { ReactNode } from "react";

interface ICardProps {
    title?: string;
    subtitle?: string;
    text?: string;
    textCenter?: boolean;
    width?: number;
    height?: number;
    id?: string;
    className?: string;
    links?: { label: string; href: string; }[];
    cardHeader?: JSX.Element;
    cardFooter?: JSX.Element;
    bordered?: boolean;
    children?: ReactNode;
}