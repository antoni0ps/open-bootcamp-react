import React, { Component, useState, useEffect } from "react";
// import "../../styles/clock.scss";

export class Clock extends Component {
    constructor(props) {
        super(props);
        // Estado privado del component
        this.state = {
            // Se genera una fecha como estado inicial del componente
            fecha: new Date(),
            edad: 0,
            nombre: "Martín",
            apellidos: "San José",
        };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h2>
                    Hora Actual:
                    {this.state.fecha.toLocaleTimeString()}
                </h2>
                <h3>
                    {this.state.nombre} {this.state.apellidos}
                </h3>
                <h1>Edad: {this.state.edad}</h1>
            </div>
        );
    }
    tick() {
        this.setState((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad,
            };
        });
    }
}



// Misma funcionalidad com componente funcional
export const ClockHook = () => {
    const initialState = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: "Antonio",
        apellidos: "Piñero",
    };

    const [clock, setclock] = useState(initialState);

    const tick = () => {
        setclock((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad,
            };
        });
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <div>
                <h2>
                    Hora Actual:
                    {clock.fecha.toLocaleTimeString()}
                </h2>
                <h3>
                    {clock.nombre} {clock.apellidos}
                </h3>
                <h1>Edad: {clock.edad}</h1>
            </div>
        </div>
    );
};
