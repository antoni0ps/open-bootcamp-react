/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase 
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
        
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}




export const DidUpdateHook = () => {

    //Si no incluimos los corchetes al final [] este método se ejecutara siempre que el componente actualice su estado
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
    });

    return (
        <div>
            <h1>DidUpdate Funcional</h1>
        </div>
    );
}

export default DidUpdate;
