import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //es una constante, las constantes no mutan
    //si hay que añadir una categoria o quitar no es la manera

    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {

    // setCategories([...categories, 'HunterX']); //Añade Hunter al final
    //setCategories(['HunterX',...categories, ]); //Añade Hunter al final

    //otra manera

    // setCategories(cats => [...cats, 'HunterX']);

    return (
        <>
            <h1 className="titulo">GifExpertApp</h1>
            <h2 className="subtitulo">Encuentra tus imagenes favoritas</h2>

            <AddCategory setCategories={setCategories} />

            <br />
            <hr />

            <ol>
                {
                    categories.map(category =>
                      
                        <GifGrid 
                            key={category}
                            category={category} 

                        />
                    
                    )
                }
            </ol>

        </>
    );
}



