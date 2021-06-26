/*El efecto es algo que va a ejecutarse de acuerdo a las alteraciones del componente
o se va a ejecutar cuando se renderice el componente*/

import React, { useEffect, useState } from 'react'

const Ejemplo10 = () => {

    const [esNombre, setesNombre] = useState(true);// el primero es la varialble, true y el segun la fc para cambiarlo

    const MostrarNombre = () => {

        const [contador, setContador] = useState(0);

        useEffect(() => {
            console.info("Iniciando nombre");
            return () => {
                console.info("---> Saliendo de nombre")
            }
        }, []);

        useEffect(() => {
            console.info("Cambiando contador a " + contador)
        }, [contador]); //escucha cuando cambia contador, y cuando cambia ejecutate

        return(
            <>
                <h3>Mi nombre es Flor {contador}</h3>
                <button onClick={()=>setContador(contador+1)}>Incrementar</button>
            </>
        )
    }

    const MostrarPais = () => {

        useEffect(() => {
            console.info("Iniciando pais");
            return () => {
                console.info("---> Saliendo de pais")
            }
        }, []); 

        return(
            <>
                <h3>Soy de Argentina</h3>
            </>
        )
    }

    useEffect(() => {
        console.info("Iniciando el componente");
    }, []);
    //se va a ejecutar cada vez que lo que le pasemos dentro del array cambie

    const manejoClick = () => {
        setesNombre(!esNombre); //si es falso va a cambiar a verdadero y al reves
    }

    return(
        <div>
            <h1>Ejemplo de Use Effect</h1>
            {esNombre ? <MostrarNombre /> : <MostrarPais />} 
            <button onClick={manejoClick}>Cambiar</button>
        </div>
        //si esNombre MostrarNombre sino MostrarPais
    )

}

export default Ejemplo10;