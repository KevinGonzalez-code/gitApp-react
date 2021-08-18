import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ categorias, setCategorias }) => {

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleValidacionCategoriaRepetida = () => {
        return categorias.find(categoria => categoria === inputValue) ? true : false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2 && !handleValidacionCategoriaRepetida()) {
            setCategorias(cats => [inputValue,...cats]);
            setInputValue('');
        } else {
            alert('No se pueden agregar valores vacios o repetidos');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribe la categoría"
                value={inputValue}
                onChange={handleInputChange} />
        </form>
    );

}

AddCategory.propTypes = {
    setCategorias: propTypes.func.isRequired
}


