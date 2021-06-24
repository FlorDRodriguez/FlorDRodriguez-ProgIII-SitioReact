//https://www.youtube.com/watch?v=lXJJ1I2bF58
//uso de reducer p alterar estados de un componente
import React from 'react'

const Ejemplo7 = () => {
    
    const estadoInicial = 0;

    const reducer = (state, accion) => {

        console.info(`El estado es ${state} ejecutado por ${accion}`);

        if (accion === "SUMAR") {
            return state + 1;
        }
        if (accion === "RESTAR") {
            return state -1;
        }
        if (accion === "LIMPIAR") {
            return estadoInicial;
        }

        return state; //siempre se retorna esto
    }
    
    const [state, disparador ] = React.useReducer(reducer, estadoInicial);
    //la fc useReducer devuelve un array con un valor inicial y un disparador 
    
    return (
        <div>
            <div>Contador: {state}</div>
            <button onClick={() => disparador("SUMAR")}> + </button>
            <button onClick={() => disparador("RESTAR")}> - </button>
            <button onClick={() => disparador("LIMPIAR")}> Limpiar </button>
        </div>
    )
}

export default Ejemplo7