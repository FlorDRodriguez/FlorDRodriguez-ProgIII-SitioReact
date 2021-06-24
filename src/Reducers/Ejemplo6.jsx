//https://youtu.be/_cljrZZxguc
import React from 'react'

const Ejemplo6 = () => {
    const array = [1, 2, 3, 4, 5];
    
    const reduct = (estado, valor) => {//valor es el valor del array
        const result = estado + valor;
        return result;
    }
    
    const estadoInicial = 0;
    const resultFinal = array.reduce(reduct, estadoInicial); //p' c/elemento del array app la fc reduct
    //el resultado final es 15
    return (
        <div>
            Reductor = {resultFinal} 
        </div>
    )
}

export default Ejemplo6