import { title } from "process";
import { Card } from "../../card/Card";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/style.scss';

import './_post-section-widget.scss';

interface IPostSectionWidgetProps {
    active?: number;
    topics?: { title: string; anchor: string; }[];
}

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