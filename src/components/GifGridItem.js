import React from 'react'

export const GifGridItem = ({title, url}) => {

    return (
        <div className="card">
            <div className="card_img">
                <img src={url} alt={title}/>
            </div>
            <p>{title}</p>
        </div>
    )
}
