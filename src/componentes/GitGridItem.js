import React from 'react'

export const GitGridItem = ({title, url}) => {
    
    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={url} alt={title}/>
           
        </div>
    )
}
