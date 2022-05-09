/**
 * Ejemplo de dcomponente de tipo clase que dispone de los 
 * métodos de ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
        
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        console.log('Se ejecuta antes del montaje del componente');
        
    }

    componentDidMount() {
        console.log('Se ejecuta justo al acabar el montaje del componente, antes de renderizarlo en la vista');
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controla si el componente DEBE o NO DEBE actualizarse
         */
        //return true o false

    }

    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        console.log('Se ejecuta justo antes de actualizar el componente');
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Se ejecuta justo despues de actualizar el componente');

    }

    
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        console.log('Se ejecuta justo antes de recibir nuevas props');
        
    }

    componentWillUnmount() {
        console.log('Se ejecuta justo antes de que el componente desaparezca');

    }

   




    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
