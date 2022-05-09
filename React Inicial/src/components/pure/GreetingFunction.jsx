import React, { useState } from 'react';
import PropTypes from 'prop-types';


//Componente funcional
const GreetingFunction = (props) => {

    //Breve introducción a useState (hook)
    //const [variable, método para actualizarla] = useState(valor inicial o por defecto)
    const [age, setAge] = useState(35);

    const birthday = () => {
        //actualizamos el state
        setAge(age + 1)
    }


    return (
        <div>
            <h1>
                ¡Hola {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es de : {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingFunction.propTypes = {
    name: PropTypes.string
};


export default GreetingFunction;

