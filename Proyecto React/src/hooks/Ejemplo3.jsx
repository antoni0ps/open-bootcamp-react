/**
 * Ejemplo Hooks:
 * -useState()
 * -useContext()
 * 
 * Pasamos información entre componentes, en lugar de hacerlo con props se hacen con un contexto
 * que se crea en el padre de los componentes  "Context provider"
 * 
 * Trabajamos con el estado de un componente de orden superior y nos permite enviar la información
 * de ese estado a todos los componentes de orden inferior a través de un contexto
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

//Inicializamos un estado vacío que va a rellenarse con los datos del padre
const miContexto = React.createContext(null)

const Componente1 = () => {

    //creamos un estado que recibirá sus datos del contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    //Creamos un estado que recibirá sus datos del contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es : {state.session}
            </h2>
        </div>
    );
}




const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '123456',
        session: 1
    }

    //Creamos el estado de este componente con useState
    const [sessionData, setSessionData] = useState(estadoInicial);

    //creamos funcion para actualizar el estado del componente
    const actualizarSesion = () => {
        setSessionData(
            {
                token: 'JWT' + Math.floor(Math.random(0,1)* 100000),
                session: sessionData.session + 1
            }
        );
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esté aquí dentro puede leer los datos de sessionData  */}
            {/* Además si se actualiza, los componentes de aquí, también lo actualizan */}
            <h1>Ejemplo de useState y useContext</h1>
            <Componente1 />
            <button onClick={actualizarSesion}>Actualizar sesión</button>

        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;




