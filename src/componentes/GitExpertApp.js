import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GitGrid } from './GitGrid';


const GitExpertApp = () => {

    const [categorias, setCategorias] = useState(['perros']);

    return (
        <>
            <h2>[ GitExpertApp ]</h2>
            <AddCategory categorias={categorias} setCategorias={setCategorias} />
            <hr />            
                {
                    categorias.map(categoria => (
                        <GitGrid 
                        key={categoria}
                        categoria={categoria} />
                    ))
                }
            
        </>

    );
};

export default GitExpertApp;