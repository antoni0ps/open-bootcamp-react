import React, {useRef} from 'react';

const ExampleChild = ({ name, send, update}) => {


    const messageRef = useRef('')
    const nameRef = useRef('')

    const pressButton = () => {
        const text = messageRef.current.value
        console.log(`Text: ${text}`);
    }

    const pressButtonParams = (text) => {
        console.log(`Text: ${text}`);
    }

    const submitName = (event) => {
        event.preventDefault();
        update(nameRef.current.value)
    }
    

    return (
        <div style={{background:'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('on mouse over')}>Hello, {name}</p>
            <button onClick={pressButton}>Botón 1</button>
            <button onClick={() => pressButtonParams('Hola desde funcion anónima con parámetros')}>Botón 2</button>
            <input
                placeholder='Envía un texto al componente padre'
                onFocus={() => console.log('Input focused')} 
                onChange={(event) => console.log('Input changed:', event.target.value)}
                onCopy={() => console.log('Copied text from input')}
                ref = {messageRef}
            />
            {/* El evento onClick llama a send como una función que por parámetros recibe un mensaje */}
            <button onClick={() => send(messageRef.current.value)}>Enviar mensaje</button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='Nombre' />
                    <button type='submit'>Actualizar nombre</button>
                </form>
            </div>
        </div>
    );
}

export default ExampleChild;
