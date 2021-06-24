//En vez de pasar una cadena, va a pasar un objeto
import React from 'react';

const Store = React.createContext();

const App = (props) => {
    const estadoInicial = {
        productos: ({id: 1, nombre: "Producto1", precio:33}, {id: 2, nombre: "Producto2", precio:11}),
        productoSeleccionado: 2
    }    
    return(
        <Store.Provider value={estadoInicial}>
            {props.children}
        </Store.Provider>

    )
}

const ListaProductos = () =>{
    const context = React.useContext(Store);
    const {productos} = context;
    return(
        <div>
            <table>
                <tr>
                    <th> Nombre</th>
                    <th>Precio</th>
                </tr>
                
                {productos.map(prod =>{//itero productos
                    return(
                        <tr key={prod.id}>
                            <th>{prod.nombre}</th>
                            <th>{prod.precio}</th>
                        </tr>

                    )
                })}
                
            </table>
        </div>
    )
}

const MostrarProductos = () => {
    return(
        <div>
            Mostrar productos
        </div>
    )
}

const Ejemplo5 = () => {
    return(
        <App>
            <ListaProductos/>
            <MostrarProductos/>
        </App>
    )
}

export default Ejemplo5;