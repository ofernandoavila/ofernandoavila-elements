import { useEffect, useState } from "react";
import { Card } from "../Card";
import '../_card.scss';

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

export function PostCard({
    postCategory,
    postAuthor,
    postExcerpt,
    postReadTime,
    postTitle,
    postRating,
    postCategoryBackgroundColor,
    postCategoryColor
}: IPostCardProps) {
    const [rating, setRating] = useState<JSX.Element[]>([]);

    function renderRating(postRating: number) : JSX.Element[] {
        const components: JSX.Element[] = [];
    
        for(let i = 0; i < 3; i++) {
            if(i < postRating) {
                components.push(<i className="fa fa-star"></i>);
            } else {
                components.push(<i className="fa-regular fa-star"></i>);
            }
        }

        return components;
    }

    useEffect(() => {
        setRating(renderRating(postRating));
    }, []);

    return (
        <Card
            className="post-card"
            width={ 380 }
            cardHeader={(
                <>
                    <span className="post-card-category">
                        <div className="background" style={{ backgroundColor: postCategoryBackgroundColor }}></div>
                        <div className="label" style={{ color: postCategoryColor }}>{ postCategory }</div>
                    </span>
                    <div className="post-card-rating">
                        <i className="fa fa-award"></i>
                        <ul>{ rating.map( element => element ) }</ul>
                    </div>
                </>
            )}
            cardFooter={(
                <>
                    <span className="post-card-author"><i className="fa-regular fa-user-circle mx-2"></i>{ postAuthor }</span>
                    <span className="post-card-read-time"><i className="fa-regular fa-clock mx-2"></i>{ postReadTime } min</span>
                </>
            )}
            title={postTitle}
            subtitle={ postExcerpt }
            textCenter
        />
    );
}