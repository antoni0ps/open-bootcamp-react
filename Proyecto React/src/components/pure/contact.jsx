import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class'


const ContactComponent = ({ contact, handleDeleteContact }) => {

    const [isConnected, setStatus] = useState(false)

    const connect = () => {
        setStatus(!isConnected)
    }



    return (
        <ul>
            <li>
                <span style={{ marginLeft: '30px' }}>Nombre: {contact.name} {contact.surname}</span>
                <span style={{ marginLeft: '30px' }}>Email: {contact.email}</span>
                <input style={{ marginLeft: '30px' }} type="checkbox" onChange={connect} checked={isConnected} />
                <span style={{ marginLeft: '10px' }}>{isConnected ? 'Contacto en línea' : 'Contacto no disponible'}</span>
                <span style={{ marginLeft: '30px' }}>
                    <i onClick={() => handleDeleteContact(contact.email)} className="bi-trash" style={{ color: 'tomato', fontSize: '20px' }}></i>
                </span>
            </li>
        </ul>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
