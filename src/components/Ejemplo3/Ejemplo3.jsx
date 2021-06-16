import React from 'react';

const Padre =  (props) => {
    const nombre = "Sebas"
    return(
        <div>
            <h2>Padre: {nombre}</h2>
            {props.children}
        </div>        
    )
}

const Hijo1 = (props) => {
    return(
        <div>
            <div>Hijo 1</div>
            {props.children}
        </div>
    )
}

const Hijo2 = (props) => {
    return(
        <div>
            <div>Hijo 2</div>
            {props.children}
        </div>
    )
}

const Nieto = () => {
    return <div>Soy el nieto</div>
}

const Ejemplo3 = () => {
    return(
        <Padre>
            <Hijo1>
                <Nieto />
            </Hijo1>
            <Hijo2></Hijo2>
        </Padre>
    )
}

export default Ejemplo3;