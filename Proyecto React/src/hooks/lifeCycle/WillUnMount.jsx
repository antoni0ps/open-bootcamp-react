/**
 * Ejemplo de uso del método componentWillUnmount para componente de clase
 * Y ejemplo de uso de hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca');
        
    }

    render() {
        return (
            <div>
                <h1>ComponentWillUnmount</h1>
            </div>
        );
    }
}


export const WillUnmountHook = () => {

    //Especificamos lo que queremos que se ejecute en el return, que es justo antes de finalizar el método
        useEffect(() => {
            // aquí no ponemos nada
            return () => {
                console.log('Comportamiento antes de que el componente desaparezca');   
            };
        }, []);

    

    return (
        <div>
            <h1>WillUnmount Funcional</h1>
        </div>
    );
}



