import React, { Component } from 'react';
import PropTypes from 'prop-types';   //Para especificar el tipo del dato que pasamos como propiedades


//COMPONENTE DE TIPO CLASE (no se suele usar)
class Greeting extends Component {

    //las props se pasan por atributos al componente, son las propiedades de un elemento html (name, width, texto alternativo imagen, etc...)
    constructor(props) {
        super(props);
        //el state son propiedades propias del componente
        this.state = {
            age: 35
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡Hola {this.props.name} desde componente de clase!
                </h1>
                <h2>
                    Tu edad es de : {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    //El metodo setState es para poder modificar el state, de lo contrario la vista se queda inmutada (vuelve a renderizar la vista)
    //Pasamos como argumento el estado previo y después aumentamos un año a ese estado previo de la edad
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }

}


// Los propTypes son para especificar el tipo de las propiedades que pasamos como atributo al componente
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
