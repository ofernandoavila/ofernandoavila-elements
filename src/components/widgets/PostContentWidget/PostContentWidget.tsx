import { Card } from "../../card/Card/Card";

export function PostContentWidget({
    postPublishDate,
    postThumbnailUrl,
    postTitle,
    postContent
}: IPostContentWidgetProps) {
    return (
        <Card width={800} bordered>
            <article className="post-wrapper">
                <div className="post-header">
                    <div className="post-info">
                        <h1 className="post-title">{ postTitle }</h1>
                        <div className="post-publish-date"><i className="fa fa-calendar"></i><b>Published:</b> { postPublishDate }</div>
                    </div>
                    <img className="elements-image-rounded elements-image-256" src={ postThumbnailUrl } alt="" />
                </div>
                <div className="post-content" dangerouslySetInnerHTML={{ __html: postContent }}></div>
            </article>
        </Card>
    );
}