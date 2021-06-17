//En vez de pasar una cadena, va a pasar un objeto
import React from 'react';

const Store = React.createContext();

const Padre =  (props) => {
    const nombre = "Sebas"
    return(
        //lo usamos como contenedor/proveedor de todos los hijos 
        <Store.Provider value={nombre}> 
            {props.children}
        </Store.Provider>        
    )
}

const Hijo1 = (props) => {
    
    // return(
    //     //el estore consume el valor que le paso el padre, lo recibe mediante una fc arrow
    //     <Store.Consumer>
    //         {//cod html entre llaves
    //         (value) => {
    //             return(
    //                 <>
    //                     <div>Hijo 1 - Mi padre es {value}</div>
    //                     {props.children}//Tambien van a poder conocerlo sus nietos 
    //                 </>
    //             )
    //         }
    //         }
    //     </Store.Consumer>
    // )   
    const value = React.useContext(Store);//Usar el contexto del valor
    return(
        <>
            <div>Hijo 1 - Mi padre es {value}</div>
            {props.children}//Tambien van a poder conocerlo sus nietos 
        </>

    )
}

const Hijo2 = (props) => {
    const value = React.useContext(Store);
    return(
        <div>
            <div>Hijo 2 - Mi papá es {value}</div>
            {props.children}
        </div>
    )
}

const Nieto = () => {
    const value = React.useContext(Store);
    return <div>Soy el nieto - Mi abuelo es {value}</div>
}

const Ejemplo4 = () => {
    return(
        <Padre>
            <Hijo1>
                <Nieto />
            </Hijo1>
            <Hijo2></Hijo2>
        </Padre>
    )
}

export default Ejemplo4;