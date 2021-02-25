import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


//Todos los hooks empiezan con use
//ej. useState, useEffect, etc
//los hooks son funciones
//rafc para functional component que podemos usarlo para un hook
//la importación de react no es necesaria a menos que retornemos jsx
//si solo retornamos javascript no es necesario la importación de react
//recuerda rafc para crear hooks


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setTimeout(() => {                   
                 
                    setstate({
                        data: imgs,
                        loading: false
                    });
                },3000);

            })

    }, [category])


    return state; // {data: [],loading: true}


}

