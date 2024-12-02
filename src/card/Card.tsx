import './_card.scss';
import { ICardProps } from './types';

export function Card({
    cardFooter,
    cardHeader,
    children,
    title,
    subtitle,
    text,
    links,
    textCenter,
    width,
    height,
    id,
    className
}: ICardProps) {
    return (
        <div id={ id } className={`card ${ textCenter ? 'text-center' : '' } ${className}`} style={{ width, height }}>
            { cardHeader ? <div className="card-header">{ cardHeader }</div> : ( <></> ) }
            <div className="card-body">
                { title ? <h5 className="card-title">{ title }</h5> : '' }
                { subtitle ? <h6 className="card-subtitle">{ subtitle }</h6> : '' }
                { text ? <p className="card-text">{ text }</p> : '' }
                { links?.map( link  => <a className='card-link' href={ link.href }>{ link.label }</a>) }
                { children }
            </div>
            { cardFooter ? <div className="card-footer">{ cardFooter }</div> : ( <></> ) }
        </div>
    );
}