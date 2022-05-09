import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class'


const ContactComponent = ({contact}) => {

    const[isConnected, setStatus] = useState(false)

    const connect = () => {
        setStatus(!isConnected)
    }



    return (
        <div>
            <h2>
                Nombre: {contact.name} {contact.surname}
            </h2>
            <h3>
                Email: {contact.email}
            </h3>
            <h4>
                <input type="checkbox"
                    onChange={connect} 
                    checked={isConnected}
                />
                {isConnected ? 'Contacto en línea' : 'Contacto no disponible'}
                
            </h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
