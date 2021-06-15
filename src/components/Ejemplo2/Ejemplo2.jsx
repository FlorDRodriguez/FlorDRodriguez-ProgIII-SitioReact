import React from 'react'

const Titulo = (props) => {
    return(
        <div>
            {props.valor && <h1>{props.valor}</h1>}
            {!props.valor && <h1>Titulo por defecto</h1>}  /*si no pasa el valor que muestre eso*/
            {props.children}
        </div>
    )
}

const Ejemplo2 = () => {
    return(
        <div>
            <Titulo valor={"Titulo 1"}>
                Esto es una prueba
            </Titulo>
            <Titulo valor={"Titulo 2"}/>
            <Titulo>
                <h2>Subtitulo</h2>
                <p>Algo más...</p>
            </Titulo>

        </div>
    )
}

export default Ejemplo2;