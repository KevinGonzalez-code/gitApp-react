import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GitGridItem } from './GitGridItem';


export const GitGrid = ({ categoria }) => {

    const { data: images, loading } = useFetchGifs(categoria);


    return (

        <>
            <h3 className="animate__animated animate__fadeIn">{categoria.toUpperCase()}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
                {
                    images.map((img) =>
                        <GitGridItem
                            key={img.id}
                            {...img} />)
                }
            </div>
        </>
    )

}
