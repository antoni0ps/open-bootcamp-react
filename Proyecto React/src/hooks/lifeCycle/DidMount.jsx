/**
 * Ejemplo de uso del método del ciclo de vida en componente clase y
 * del hook del ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

// Componente de clase
export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderizado)');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


// Componente funcional
export const DidMountHook = () => {

    //Dejando los corchetes vacíos [] este método se ejecuta justo cuando el componente se crea por primera vez
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderizado)');
    }, []);

    return (
        <div>
            <h1>DidMount Funcional</h1>
        </div>
    );
}


