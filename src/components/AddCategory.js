import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) =>{                                            
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // Validando que el inputValue reciba más de dos caracteres
        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
            setinputValue('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form_control">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange } 
                    placeholder="Escribe el nombre del gif que desees buscar .."   
                />
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}