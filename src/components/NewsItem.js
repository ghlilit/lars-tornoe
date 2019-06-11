import React from 'react'
import getImage from './getImage'

export default function NewsItem({name, date, text, id}) {
    let img = getImage(id);
    return (
        <div>
            <img src={img} />
            <div className="news-item">
                <div className="news-name">{name}</div>
                <div className="news-date">{date}</div>
                <p className="news-text">{text}</p>
            </div>
        </div>
    )
}
