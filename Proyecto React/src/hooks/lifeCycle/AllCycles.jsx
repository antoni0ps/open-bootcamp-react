import React, { useEffect } from 'react';

const AllCycles = () => {

    // Solo se debe tener un useEffect dentro de cada componente
    useEffect(() => {
        console.log('Componente creado');

        const intervalID = setInterval(() => {
            document.title = `${new Date().getTime()}`;
            console.log('actualización del componente');

        }, 1000)

        return () => {
            console.log('Componente va a desaparecer');
            document.title = 'Tiempo detenido';
            clearInterval(intervalID);
        };
    }, []);


    return (
        <div>

        </div>
    );
}

export default AllCycles;
