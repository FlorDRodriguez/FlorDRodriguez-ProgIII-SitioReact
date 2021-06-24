//https://www.youtube.com/watch?v=yI-FEixQ3_U
import React from 'react'

const Ejemplo8 = () => {
    
    const estadoInicial = 0;

    const reductor = (estado, accion) => {

        console.info(`El estado es ${estado} ejecutado por ${accion}`);

        switch(accion.type){
            case "SUMAR":
                return estado + accion.payload;
            case "RESTAR":
                return estado - accion.payload;
            case "LIMPIAR":
                return accion.payload;
            default:
                return estado;
        }

        /*if (accion.type === "SUMAR") {
            return estado + accion.payload;
        }
        if (accion.type === "RESTAR") {
            return estado - accion.payload;
        }
        if (accion.type === "LIMPIAR") {
            return accion.payload;
        }

        return estado; //siempre se retorna esto*/
    }
    
    const [estado, disparador ] = React.useReducer(reductor, estadoInicial);
    //la fc useReducer devuelve un array con un valor inicial y un disparador 
    
    return (
        <div>
            <div>Contador: {estado}</div>
            <button onClick={() => disparador({type: "SUMAR", payload: 1})}> + 1 </button>
            <button onClick={() => disparador({type: "RESTAR", payload: 2})}> - 2 </button>
            <button onClick={() => disparador({type: "LIMPIAR", payload: estadoInicial})}> Limpiar </button>
        </div>
    )
}

export default Ejemplo8