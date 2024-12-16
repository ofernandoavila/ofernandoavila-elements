import { Card } from '../../card/Card/Card';
import '../../../scss/style.scss';

export function PostSectionWidget({
    topics,
    active = 0
}: IPostSectionWidgetProps) {
    return (
        <Card
            className="post-section-widget"
            width={380}
            bordered={ false }
        >
            <ul className="nav">
                { topics ? topics.map( (topic, index) => (
                    <li className={`${ active === index ? 'active' : '' }`}><a href={ topic.anchor }>{ topic.title }</a></li>
                ) ) : '' }
            </ul>
        </Card>
    );
}