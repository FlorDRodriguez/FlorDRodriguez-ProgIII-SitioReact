import React,{ useState } from 'react';

const Contador = () => {
    const[contador, setContador] = useState(10);
    const[nombre, setNombre] = useState("Juan Gomez");

    const decrementar = () =>{
        setContador(contador-1);
    }

    const cambiarNombre = () => {
        setNombre("Pepe");
    }

    return(
        <React.Fragment>
            <h1>Primera Aplicación con REACT</h1>
            <h3>Bienvenido: {nombre}</h3>
            <h2>Cantidad: {contador} </h2>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={decrementar}>-</button>
            <button onClick={cambiarNombre}>Cambiar nombre</button>            

        </React.Fragment>
    );
}

export default Contador;