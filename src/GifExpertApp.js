import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['Cats'])
        /*
    const handleAdd = ()=>{
       -- Extrayendo las categorias con el operador de propagación [...categorias]

        setCategories([...categories, 'Hola Mundo']);
        setCategories(categ => [...categ, 'Hola Mundo']);
    }
    */ 

    return(
        <>
            <h1 className="title">Buscando GIF - GIPHY</h1>
            <AddCategory 
                setCategories={setCategories}
            />

            {categories.map(category=>(
                <GifGrid 
                    key={category}
                    category={category}
                />
                ) 
            )}

        </>
    )
}

export default GifExpertApp;