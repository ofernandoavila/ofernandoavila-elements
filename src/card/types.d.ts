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

interface IPostCardProps {
    postTitle: string;
    postCategory: string;
    postExcerpt: string;
    postAuthor: string;
    postReadTime: number;
    postRating: number;
    postCategoryBackgroundColor?: string;
    postCategoryColor?: string;
}
