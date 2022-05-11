import React, {useState} from 'react';
import ExampleChild from '../pure/ExampleChild';

const Examplefather = () => {
    
    const [name, setName] = useState('Antonio');


    const showMessage = (text) => {
        console.log(`Mensaje recibido: ${text}`)
    }

    const updateName = (newName) => {
        setName(newName)
        
    }

    return (
        <div style={{backgroundColor: 'tomato', padding:'10px'}}>
            {/* La prop send creada en el hijo(funcion) la especificamos en el componente padre
            y le pasamos la funcion que queramos */}
            {/* Imprime el mensaje (text) que ha sido enviado por parámetros en el hijo */}
            <ExampleChild name={name} send={showMessage} update={updateName}/>
        </div>
    );
}

export default Examplefather;
