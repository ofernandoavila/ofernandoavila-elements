import { ReactNode } from "react";

interface ICardProps {
    title?: string;
    subtitle?: string;
    text?: string;
    links?: { label: string; href: string; }[];
    cardHeader?: JSX.Element;
    cardFooter?: JSX.Element;
    children?: ReactNode;
}