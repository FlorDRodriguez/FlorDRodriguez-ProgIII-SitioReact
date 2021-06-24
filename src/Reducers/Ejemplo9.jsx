//https://www.youtube.com/watch?v=Y-Nt6_isT9k
import React from 'react'

const fecha = new Date().toString();

const Ejemplo9 = () => {
    
    const estadoInicial = {
        resultado: 0,
        fechaRes: fecha

    };//ahora el estado inicial es un objeto

    const reductor = (estado, accion) => {

        console.info(`El estado es ${estado} ejecutado por ${accion}`);

        switch(accion.type){
            case "SUMAR":
                return {...estado, resultado: estado.resultado + accion.payload};
                //sumar es todo lo que tiene el estado y el resultado se reemplaza por esa suma
            case "RESTAR":
                return {...estado, resultado: estado.resultado - accion.payload};
            case "LIMPIAR":
                return accion.payload;
            case "ACTUALIZAR":
                return {...estado, fechaRes: accion.payload}; //solo va a fabiar fechaRes, resultado queda igual
            default:
                return estado;
            
        }

        
    }
    
    const [estado, disparador ] = React.useReducer(reductor, estadoInicial);
    //la fc useReducer devuelve un array con un valor inicial y un disparador 
    
    return (
        <div>
            <div>Contador: {estado.resultado}</div>
            <button onClick={() => disparador({type: "SUMAR", payload: 1})}> + 1 </button>
            <button onClick={() => disparador({type: "RESTAR", payload: 2})}> - 2 </button>
            <button onClick={() => disparador({type: "LIMPIAR", payload: estadoInicial})}> Limpiar </button>
            <div>Fecha: {estado.fechaResultado}</div>
            <button onClick={() => disparador({type: "ACTUALIZAR", payload: new Date().toString()})}>Actualizar fecha</button>
        </div>
    )
}

export default Ejemplo9